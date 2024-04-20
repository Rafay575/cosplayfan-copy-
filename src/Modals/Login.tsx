import { actions, state } from "../store";
import "./Modal.css";

const Login = () => {
  return (
    <div class="container mx-auto px-4">
      {state().isLoginModalOpen && (
        <div class="backdrop fixed overflow-y-auto overflow-x-hidden  top-0 bottom-0 left-0 right-0">
          <div>
            <div class="background overflow-y-auto overflow-x-hidden fixed top-4 right-0 left-0 z-50 justify-center items-center w-full md:w-[750px] mx-auto p-8">
              <div>
                <h3 class="text-[#4A72FF] text-[32px] my-2 font-[600] leading-normal">
                  Log In
                </h3>
                {/*  */}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
                  <button class="flex items-center justify-center py-1 gap-1 btn1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M12.0002 21.9964C14.5832 21.9964 16.9302 21.0079 18.7047 19.4004L15.6097 16.7814C14.5719 17.5706 13.3039 17.9975 12.0002 17.9964C9.39916 17.9964 7.19066 16.3379 6.35866 14.0234L3.09766 16.5359C4.75266 19.7744 8.11366 21.9964 12.0002 21.9964Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                        fill="#1976D2"
                      />
                    </svg>
                    <p class="text-white text-[16px] font-[500] leading-normal">
                      Sign Up With Google
                    </p>
                  </button>
                  <button class="flex items-center justify-center py-1 gap-1 btn1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_6580_2690)">
                        <path
                          d="M24 2.387C23.1013 2.78513 22.148 3.04647 21.1719 3.16231C22.1887 2.55294 22.9693 1.58797 23.3369 0.438219C22.3704 1.01177 21.3129 1.41587 20.2103 1.63306C19.312 0.676156 18.0324 0.078125 16.6162 0.078125C13.8968 0.078125 11.6921 2.28275 11.6921 5.00187C11.6921 5.38784 11.7357 5.76359 11.8196 6.12406C7.72744 5.91866 4.09931 3.95844 1.67072 0.979437C1.24697 1.70666 1.00416 2.55256 1.00416 3.45481C1.00416 5.16312 1.8735 6.67016 3.19462 7.55319C2.4127 7.5287 1.64798 7.31751 0.964313 6.93725C0.964031 6.95787 0.964031 6.9785 0.964031 6.99922C0.964031 9.38487 2.66128 11.375 4.91372 11.8273C4.18864 12.0245 3.42809 12.0534 2.69016 11.9117C3.31669 13.8679 5.13516 15.2914 7.28972 15.3312C5.60456 16.6518 3.48141 17.439 1.17459 17.439C0.777094 17.439 0.385219 17.4157 0 17.3702C2.17903 18.7673 4.76719 19.5824 7.54781 19.5824C16.6047 19.5824 21.5573 12.0795 21.5573 5.57291C21.5573 5.35934 21.5526 5.147 21.543 4.93587C22.507 4.23902 23.339 3.37589 24 2.387Z"
                          fill="#55ACEE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_6580_2690">
                          <rect width="24" height="19.5938" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p class="text-white text-[16px] font-[500] leading-normal">
                      Sign Up With Twitter
                    </p>
                  </button>
                </div>
                {/*  */}
                <div class="flex items-center justify-center gap-4 mt-4">
                  <div class="bg-white w-[300px] h-[1px]"></div>
                  <p class="text-white text-[16px] font-[500] leading-normal">
                    OR
                  </p>{" "}
                  <div class="bg-white w-[300px] h-[1px]"></div>
                </div>
                {/*  */}

                <form class="space-y-6">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-[18px] text-white font-[600]"
                    >
                      Username Or Email
                    </label>
                    <input type="email" placeholder="Enter Username Or Email" />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-[18px] text-white font-[600]"
                    >
                      Password
                    </label>
                    <input type="password" placeholder="Enter Password" />
                  </div>
                  <div class="flex items-center justify-between ">
                    <div class="flex items-center justify-center gap-1">
                      <input
                        id="terms"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />

                      <label
                        for="terms"
                        class="block text-[16px] leading-[24px] text-white font-[500]"
                      >
                        Stay Logged In
                      </label>
                    </div>
                    <a class="text-[12px] font-[500] text-[#10E0F9]" href="#">
                      Forgot Password?
                    </a>
                  </div>
                  <button type="submit" class="btn2 w-full text-white h-[50px]">
                    Sign Up
                  </button>
                  <p class="text-white text-[16px] font-[500] text-center mt-2">
                    Don’t Have An Account?{" "}
                    <a
                      onclick={actions.openSignupModal}
                      href="#"
                      class="text-[#FF23FF] text-[16px] font-[500]"
                    >
                      Sign Up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
