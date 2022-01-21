import { ACTIONS } from "./App";

function DigitButtons({ dispatch, digit }) {
	return (
		<button
			onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
		>
			{digit}
		</button>
	);
}
export default DigitButtons;
