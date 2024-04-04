import PropTypes from "prop-types";

const GoogleIcon = ({ className }) => {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <clipPath id="g">
        <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
      </clipPath>
      <g className="colors" clipPath="url(#g)">
        <path fill="#FBBC05" d="M0 37V11l17 13z" />
        <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
        <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
        <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
      </g>
    </svg>
  );
};

GoogleIcon.propTypes = {
  className: PropTypes.string,
};

const PawIcon = ({ className }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="35px"
      height="35px"
      viewBox="0 0 300.000000 300.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      {" "}
      <g
        transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        {" "}
        <path d="M1033 2580 c-90 -19 -169 -82 -211 -169 -24 -50 -27 -67 -26 -156 0 -85 5 -114 33 -195 17 -52 48 -119 68 -148 92 -135 241 -184 375 -124 59 26 105 75 142 152 29 62 31 71 30 185 0 172 -32 271 -120 365 -72 77 -186 112 -291 90z m190 -50 c19 -16 39 -30 45 -30 14 0 72 -61 72 -77 0 -7 4 -13 8 -13 5 0 19 -23 33 -52 20 -43 24 -66 23 -137 0 -49 -8 -111 -17 -143 -23 -76 -20 -96 4 -28 l19 55 -3 -55 c-4 -69 -48 -162 -91 -193 -68 -48 -114 -65 -169 -62 -64 4 -115 25 -163 67 -73 64 -118 148 -80 148 8 0 24 -16 37 -36 29 -48 56 -76 101 -103 68 -41 194 -38 230 6 10 13 6 12 -17 -3 -22 -14 -47 -19 -101 -19 -64 0 -77 3 -116 30 -23 17 -57 53 -75 79 -36 55 -49 66 -78 66 -21 0 -50 54 -39 72 3 5 -1 17 -10 26 -21 24 -26 155 -9 221 25 99 94 172 193 202 14 4 57 8 97 8 67 1 75 -1 106 -29z" />{" "}
        <path d="M1840 2581 c-170 -37 -280 -217 -280 -461 0 -132 25 -205 94 -276 41 -42 63 -56 110 -69 228 -66 430 143 444 460 4 99 2 116 -18 163 -26 60 -101 135 -163 162 -50 22 -138 32 -187 21z m183 -45 c67 -33 124 -95 133 -146 4 -25 7 -48 6 -52 -1 -5 3 -8 10 -8 8 0 9 -28 5 -102 -12 -209 -108 -371 -248 -418 -127 -43 -246 6 -305 125 -27 56 -27 89 1 79 8 -3 15 -12 15 -19 0 -8 4 -16 9 -19 26 -16 -6 39 -36 61 l-34 26 6 76 c10 106 31 204 56 252 29 57 106 131 160 151 57 23 169 19 222 -6z" />{" "}
        <path d="M1815 2481 c-91 -42 -199 -196 -204 -291 -2 -36 2 -50 21 -67 40 -38 71 -39 107 -3 17 17 31 41 31 53 1 32 33 98 61 124 13 12 42 29 64 39 78 32 96 84 46 135 -35 34 -68 37 -126 10z m110 -26 c43 -42 33 -63 -45 -98 -74 -33 -98 -62 -130 -154 -24 -74 -28 -78 -57 -81 -25 -2 -35 2 -48 22 -14 20 -14 31 -5 68 34 125 122 229 218 258 40 12 41 12 67 -15z" />{" "}
        <path d="M2159 2318 c-9 -27 -23 -116 -18 -111 8 8 29 113 23 113 -2 0 -4 -1 -5 -2z" />{" "}
        <path d="M465 1934 c-126 -40 -215 -161 -215 -292 0 -178 126 -390 278 -464 58 -29 76 -33 142 -32 91 1 133 17 199 79 69 64 94 131 93 245 -1 104 -23 174 -87 270 -108 162 -269 238 -410 194z m210 -44 c54 -26 155 -115 155 -136 0 -7 8 -18 18 -24 9 -6 12 -13 7 -16 -11 -4 -8 -94 4 -106 3 -4 5 12 3 35 l-4 42 22 -21 c28 -27 59 -148 56 -222 -4 -103 -64 -195 -158 -243 -65 -33 -167 -31 -236 4 -73 38 -94 57 -80 74 6 7 17 13 25 13 8 0 11 5 8 10 -4 7 -12 7 -25 0 -38 -21 -54 -11 -102 64 -75 118 -113 285 -81 358 30 66 35 75 61 105 35 39 80 69 122 82 56 17 149 8 205 -19z" />{" "}
        <path d="M426 1807 c-32 -31 -36 -40 -36 -85 0 -45 4 -53 37 -82 32 -29 41 -32 80 -27 108 12 148 138 67 208 -11 9 -40 17 -65 18 -40 2 -51 -2 -83 -32z m118 2 c32 -15 59 -70 50 -104 -7 -28 -45 -62 -80 -71 -26 -7 -79 19 -94 45 -24 46 -7 101 38 125 33 18 53 19 86 5z" />{" "}
        <path d="M2359 1931 c-212 -68 -368 -363 -304 -578 8 -28 33 -73 55 -101 111 -139 316 -146 460 -16 109 98 198 294 188 417 -7 89 -41 158 -103 215 -86 79 -183 99 -296 63z m194 -31 c35 -13 71 -38 101 -67 46 -47 46 -48 47 -118 1 -48 3 -61 8 -40 5 25 8 27 14 12 27 -68 -17 -222 -96 -337 -67 -97 -138 -148 -238 -170 -96 -21 -205 19 -257 94 -29 43 -29 60 3 54 21 -4 23 -3 13 9 -7 9 -21 12 -38 8 -26 -6 -28 -3 -34 35 -3 23 -4 46 0 51 3 5 1 16 -5 23 -12 14 -4 67 21 151 20 64 77 155 133 211 100 99 211 128 328 84z" />{" "}
        <path d="M2272 1803 c-18 -8 -47 -34 -65 -56 -17 -21 -37 -44 -43 -51 -25 -28 -59 -114 -59 -154 0 -34 5 -48 24 -63 52 -42 107 -13 136 72 16 45 59 100 103 129 14 9 25 29 29 53 5 31 1 42 -17 62 -27 29 -61 31 -108 8z m92 -19 c28 -28 18 -54 -47 -117 -46 -46 -66 -74 -76 -107 -16 -55 -37 -80 -66 -80 -98 0 -31 198 99 291 44 33 68 36 90 13z" />{" "}
        <path d="M1345 1563 c-136 -49 -218 -126 -286 -270 -51 -106 -66 -122 -160 -176 -128 -73 -212 -240 -194 -386 13 -100 42 -160 114 -232 88 -87 157 -114 286 -114 85 1 97 4 204 49 113 47 116 48 205 44 81 -3 103 -9 196 -48 99 -42 110 -44 195 -44 109 1 182 25 257 88 137 112 179 299 104 462 -31 67 -113 155 -180 194 -68 38 -100 73 -131 144 -55 125 -129 205 -244 263 -72 37 -77 38 -195 41 -96 2 -131 -1 -171 -15z m285 -35 c120 -36 227 -131 284 -253 41 -88 73 -126 150 -177 87 -58 134 -106 161 -163 98 -207 7 -425 -209 -498 -80 -27 -212 -18 -271 19 -11 6 -55 24 -97 38 -120 41 -216 34 -351 -25 -85 -38 -95 -40 -183 -46 -58 -4 -84 -1 -135 17 -102 37 -146 75 -201 175 -31 56 -33 66 -33 156 0 87 3 102 30 154 17 31 48 76 71 99 46 46 74 70 74 61 0 -3 10 3 22 15 12 11 25 20 30 20 24 0 73 64 112 146 68 142 144 214 271 259 56 19 81 22 153 18 48 -2 103 -9 122 -15z" />{" "}
        <path d="M1405 1509 c-146 -48 -212 -104 -277 -234 -55 -110 -80 -140 -157 -190 -179 -116 -237 -276 -161 -441 23 -51 85 -113 136 -138 21 -10 46 -22 55 -26 9 -5 43 -12 75 -15 65 -8 122 4 194 37 25 12 50 23 55 24 6 2 30 11 55 20 73 27 215 24 275 -6 67 -33 197 -72 245 -73 88 -2 165 26 217 81 44 45 79 100 75 115 -1 4 2 7 6 7 4 0 8 8 9 18 8 134 2 185 -27 241 -22 42 -76 95 -145 142 -72 48 -148 143 -160 201 -4 15 -10 28 -14 28 -4 0 -16 15 -26 33 -10 19 -30 42 -46 53 -15 10 -26 20 -23 23 5 5 -53 40 -138 82 -47 24 -69 29 -125 28 -37 0 -81 -5 -98 -10z m258 -69 c82 -41 143 -104 190 -196 53 -105 88 -146 168 -199 90 -59 115 -86 146 -153 28 -60 33 -151 12 -220 -17 -59 -78 -125 -145 -158 -82 -40 -151 -37 -284 14 -219 84 -286 82 -510 -14 -207 -89 -430 46 -430 260 0 111 52 193 176 276 78 53 110 93 167 205 76 153 200 228 362 222 66 -3 91 -9 148 -37z" />{" "}
        <path d="M1595 1427 c-9 -21 -49 -35 -120 -40 -71 -6 -133 -31 -198 -81 -26 -20 -54 -36 -62 -36 -22 0 -18 -17 5 -23 11 -3 18 -1 14 4 -3 5 0 9 6 9 6 0 30 13 53 29 73 50 122 69 188 76 80 8 117 22 125 47 7 23 -3 38 -11 15z" />{" "}
        <path d="M1423 1270 c-95 -14 -202 -95 -218 -166 -2 -11 -9 -37 -14 -58 -5 -22 -8 -43 -5 -47 12 -19 11 -77 -2 -108 -29 -69 -8 -163 44 -196 17 -11 30 -24 29 -30 -2 -5 -34 -26 -72 -45 -64 -32 -77 -35 -157 -35 -50 0 -83 -4 -78 -9 5 -5 46 -7 92 -4 68 3 97 10 153 37 56 27 81 33 128 32 36 -1 71 5 93 15 40 19 77 62 70 81 -6 16 -1 16 25 2 11 -6 18 -17 15 -24 -3 -8 12 -25 36 -41 34 -24 52 -29 108 -30 37 -1 72 -4 77 -7 5 -3 30 -13 56 -22 105 -36 226 -11 290 60 23 25 57 90 57 107 -1 7 -10 -6 -21 -29 -27 -56 -72 -101 -122 -124 -48 -21 -136 -25 -188 -8 -53 18 -91 59 -55 59 8 0 28 17 45 37 27 32 31 46 31 94 0 31 -6 72 -14 90 -7 19 -12 43 -9 54 7 35 3 107 -9 146 -19 67 -112 151 -178 163 -64 11 -154 14 -207 6z m249 -53 c103 -60 148 -162 119 -267 -4 -15 0 -37 11 -59 51 -101 -22 -221 -135 -221 -42 0 -70 12 -104 43 -18 16 -23 31 -23 74 0 45 3 53 19 53 31 0 71 39 71 69 0 45 -15 51 -125 51 -108 0 -125 -7 -125 -47 0 -29 42 -73 70 -73 17 0 20 -6 20 -48 0 -54 -17 -85 -60 -107 -70 -36 -159 -7 -198 66 -25 47 -24 97 2 150 10 20 11 38 3 77 -21 101 38 205 142 249 85 37 242 32 313 -10z m-92 -309 c0 -7 -16 -25 -34 -40 -35 -28 -56 -35 -56 -20 0 4 -13 16 -30 25 -18 11 -27 23 -23 32 7 20 143 22 143 3z" />{" "}
        <path d="M1330 1120 c-11 -11 -20 -29 -20 -40 0 -25 34 -60 58 -60 46 0 69 72 34 103 -25 22 -48 21 -72 -3z" />{" "}
        <path d="M1600 1120 c-11 -11 -20 -29 -20 -40 0 -27 35 -60 63 -60 28 0 57 29 57 56 0 26 -36 64 -60 64 -11 0 -29 -9 -40 -20z" />{" "}
        <path d="M1113 1089 c18 -14 27 -30 27 -50 0 -32 -21 -49 -85 -69 -58 -18 -119 -67 -157 -127 -18 -29 -42 -56 -53 -62 -18 -9 -18 -10 7 -10 21 -1 34 10 64 52 45 62 93 106 116 107 9 0 20 5 23 10 3 6 15 10 26 10 10 0 37 18 59 41 l40 41 -22 32 c-26 36 -38 46 -58 46 -9 -1 -5 -8 13 -21z" />{" "}
      </g>{" "}
    </svg>
  );
};

PawIcon.propTypes = {
  className: PropTypes.string,
};

export { GoogleIcon, PawIcon };
