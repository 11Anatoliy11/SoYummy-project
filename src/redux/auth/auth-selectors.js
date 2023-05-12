export const authSelectors = {
    getLoggedIn :state => state.auth.isLoggedIn,
    getUser:state => state.auth.user,
    getIsRefreshing: state => state.auth.isRefreshing,
    getIsRegistered:state => state.auth.isRegistered,
}
