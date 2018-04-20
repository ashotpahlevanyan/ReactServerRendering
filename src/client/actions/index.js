// use axios if you want to make calls to other api's like instagram, facebook...
// but if you make a call to your api,
// it is better to use the configured api instead like we did

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
	const res = await api.get('/users');

	dispatch({
		type: FETCH_USERS,
		payload: res
	});
};