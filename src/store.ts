import { createSignal } from "solid-js";

interface State {
  isLoginModalOpen: boolean;
  isSignupModalOpen: boolean;
}

const initialState: State = {
  isLoginModalOpen: false,
  isSignupModalOpen: false,
};

const [state, setState] = createSignal<State>(initialState);

interface Actions {
  openLoginModal: () => void;
  closeLoginModal: () => void;
  toggleLoginModal: () => void;

  openSignupModal: () => void;
  closeSignupModal: () => void;
  toggleSignupModal: () => void;
}

const actions: Actions = {
  openLoginModal: () => {
    setState({
      isLoginModalOpen: true,
      isSignupModalOpen: false, // Close signup modal when login modal opens
    });
  },
  closeLoginModal: () => setState({ ...state(), isLoginModalOpen: false }),
  toggleLoginModal: () =>
    setState({ ...state(), isLoginModalOpen: !state().isLoginModalOpen }),

  openSignupModal: () => {
    setState({
      isLoginModalOpen: false, // Close login modal when signup modal opens
      isSignupModalOpen: true,
    });
  },
  closeSignupModal: () => setState({ ...state(), isSignupModalOpen: false }),
  toggleSignupModal: () =>
    setState({ ...state(), isSignupModalOpen: !state().isSignupModalOpen }),
};

export { state, actions };
