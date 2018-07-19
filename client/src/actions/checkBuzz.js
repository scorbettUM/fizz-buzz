import {
  SELECT_NUMBER,
  INCREMENT_SCORE_BUZZ,
  DECREMENT_SCORE_BUZZ,
  CHECK_BUZZ,
  GET_NEXT_NUMBER,
  CHECK_IS_END,
  CHECK_PLAYER_WIN_STATE,
  SET_GAME_END_STATE,
  RESET_PROGRESS_BAR
} from '../constants'

const checkBuzz = () => {
  return dispatch => {

    dispatch({
      type: CHECK_BUZZ
    })
    dispatch({
      type: INCREMENT_SCORE_BUZZ
    })
    dispatch({
      type: DECREMENT_SCORE_BUZZ
    })
    dispatch({
      type: CHECK_IS_END
    })
    dispatch({
      type: SET_GAME_END_STATE
    })
    dispatch({
      type: CHECK_PLAYER_WIN_STATE
    })
    dispatch({
      type: GET_NEXT_NUMBER
    })
    dispatch({
      type: SELECT_NUMBER
    })
    dispatch({
      type: RESET_PROGRESS_BAR
    })
  }
}

export default checkBuzz
