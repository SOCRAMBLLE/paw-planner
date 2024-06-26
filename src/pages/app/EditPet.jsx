import {
  Link,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import PageMotion from "../../components/PageMotion";
import "./EditPet.css";
import {
  deletePet,
  editPet,
  getPet,
  uploadPetPhoto,
} from "../../app/api/firebase";
import pawIcon from "../../assets/brand/paw.png";
import { FaEdit } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import { fetchBreeds } from "../../app/api/breedData";

export async function Loader({ request }) {
  const id = new URL(request.url).searchParams.get("id");
  const data = await getPet(id);
  return data;
}

const EditPet = () => {
  const [searchParams] = useSearchParams();
  const backPath = searchParams.get("back");
  const data = useLoaderData();
  const navigate = useNavigate();
  const [currentPet, setCurrentPet] = useState(data);
  const [editMode, setEditMode] = useState(null); // 'name', 'type', 'breed', 'birthday'
  const [formData, setFormData] = useState({
    name: currentPet.data.name,
    breed: currentPet.data.breed,
    birthday: currentPet.data.birthday,
    imageURL: currentPet.data.imageURL,
  });
  const [breedData, setBreedData] = useState([]);
  const [deletePetAlert, setDeletePetAlert] = useState(false);

  useEffect(() => {
    const getBreeds = async () => {
      try {
        const data = await fetchBreeds(currentPet?.data.type);
        return setBreedData(data);
      } catch (err) {
        throw new Error(err);
      }
    };
    getBreeds();
  }, [currentPet]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await editPet(currentPet.id, formData);
      const updatedPetData = await getPet(currentPet.id);
      setCurrentPet(updatedPetData);
      setEditMode(null);
    } catch (error) {
      console.error("Failed to update pet:", error);
    }
  };

  const handleCancel = () => {
    setFormData((prev) => ({
      ...prev,
      [editMode]: currentPet.data[editMode],
    }));
    setEditMode(null);
  };

  const handleDelete = async () => {
    await deletePet(currentPet.id);
    navigate("/profile");
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const photoURL = await uploadPetPhoto(file);
      await editPet(currentPet.id, { imageURL: photoURL });

      setFormData((prev) => ({ ...prev, imageURL: photoURL }));
    } catch (error) {
      console.error("Erro ao fazer upload da imagem:", error);
    }
  };

  return (
    <PageMotion>
      <main className="editpet-page--container">
        <div className="editpet-page--img-container">
          <img
            onClick={triggerFileInput}
            src={formData.imageURL ? formData.imageURL : pawIcon}
          />
          <input
            id="fileInput"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
        <section className="editpet-page--details">
          <label>
            Buddy&apos;s name:
            {editMode === "name" ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            ) : (
              <>
                <h3>{currentPet.data.name}</h3>
                <span
                  className="editpet--edit-btn"
                  onClick={() => setEditMode("name")}
                >
                  <FaEdit />
                </span>
              </>
            )}
          </label>
          <label>
            Buddy&apos;s breed:
            {editMode === "breed" ? (
              <select
                required
                value={formData.breed}
                onChange={handleChange}
                name="breed"
              >
                <option defaultValue value="i don't know">
                  I don&apos;t know
                </option>
                {breedData.map((breed, index) => (
                  <option key={index} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            ) : (
              <>
                <h3>{currentPet.data.breed}</h3>
                <span
                  className="editpet--edit-btn"
                  onClick={() => setEditMode("breed")}
                >
                  <FaEdit />
                </span>
              </>
            )}
          </label>
          <label>
            Buddy&apos;s birthday:
            {editMode === "birthday" ? (
              <input
                type="date"
                required
                value={formData.birthday}
                onChange={handleChange}
                name="birthday"
              />
            ) : (
              <>
                <h3>{currentPet.data.birthday}</h3>
                <span
                  className="editpet--edit-btn"
                  onClick={() => setEditMode("birthday")}
                >
                  <FaEdit />
                </span>
              </>
            )}
          </label>
          <div className="editpet--buttons-container">
            <Link className="editpet--back-btn" to={backPath}>
              <IoChevronBack />
              Back
            </Link>
            <div>
              {editMode ? (
                <>
                  <button
                    className="editpet--cancel-btn"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button className="editpet--save-btn" onClick={handleSave}>
                    Update Pet
                  </button>
                </>
              ) : (
                <button
                  className="editpet--delete-btn"
                  onClick={() => setDeletePetAlert(true)}
                >
                  Delete Pet
                </button>
              )}
            </div>
          </div>
        </section>
        {deletePetAlert && (
          <div className="editpet--delete-alert">
            <h2>Are you sure?</h2>
            <div>
              <button
                className="editpet--cancel-btn"
                onClick={() => setDeletePetAlert(false)}
              >
                Cancel
              </button>
              <button className="editpet--delete-btn" onClick={handleDelete}>
                Delete {formData.name}
              </button>
            </div>
          </div>
        )}
      </main>
    </PageMotion>
  );
};

export default EditPet;
