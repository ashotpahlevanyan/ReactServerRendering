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

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
	const res = await api.get('/current_user');

	dispatch({
		type: FETCH_CURRENT_USER,
		payload: res
	})
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmin = () => async (dispatch, getState, api) => {
	const res = await api.get('/admins');

	dispatch({
		type: FETCH_ADMINS,
		payload: res
	})
};