const fetchMyName = function (context, myName) {
	context.commit('setMyName', myName)
}

const actions = {
	fetchMyName
}

export default actions
