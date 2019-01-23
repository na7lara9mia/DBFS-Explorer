export default {
  getPlatform: function (state) {
    return state.platform
  },
  getInfoSnackbarObject: function (state) {
    return state.info.snackbar
  },
  getInfoSnackbarStatus: function (state) {
    return state.info.snackbar.status
  },
  isLoggedIn: function (state) {
    return state.loggedIn
  },
  getTransferStateList: function (state) {
    return state.dialogs.transferState.list
  },
  getDialogs: function (state) {
    return state.dialogs
  },
  getSettings: function (state) {
    return state.settings
  }
}
