export const analyticsStyles = {
  loadingContainer: "flex items-center justify-center min-h-screen",
  spinner: "w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin",
  tooltipContainer: "bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs font-semibold",
  tooltipLabel: "text-gray-500 mb-1",
  incomeClass: "text-green-600",
  spendingClass: "text-red-500",
  tooltipName: "text-gray-800",
  tooltipValue: "text-blue-600",
  pageContainer: "p-6 bg-gray-50 min-h-screen",
  headingTitle: "text-2xl font-bold text-gray-900",
  headingSubtitle: "text-gray-500 text-sm mt-0.5",
  grid: "grid grid-cols-1 xl:grid-cols-2 gap-6",
  card: "bg-white rounded-xl border border-gray-200 shadow-sm p-6",
  cardHeading: "text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider",
  legendContainer: "flex items-center gap-4 mb-4",
  legendRow: "flex items-center gap-2",
  greenDot: "w-3 h-3 rounded-full bg-green-500",
  redDot: "w-3 h-3 rounded-full bg-red-500",
  legendText: "text-xs text-gray-500 font-medium",
  barChartContainer: "h-72",
  pieCategoryRow: "flex flex-col md:flex-row items-center gap-6",
  pieChartWrapper: "w-full md:w-1/2 h-52",
  categoryListWrapper: "w-full md:w-1/2 space-y-3",
  categoryItem: "flex items-center gap-3",
  categoryDotShape: "w-2.5 h-2.5 rounded-full shrink-0",
  categoryFlexRow: "flex justify-between items-center mb-1",
  categoryTextName: "text-xs font-medium text-gray-700",
  categoryTextAmount: "text-xs font-bold text-gray-900",
  categoryProgressBar: "h-1.5 bg-gray-100 rounded-full overflow-hidden",
  categoryProgressFill: "h-full rounded-full",
};

export const changePasswordStyles = {
  pageContainer: "p-4 sm:p-6 bg-gray-50 min-h-screen",
  headerContainer: "mb-6",
  title: "text-xl sm:text-2xl font-bold text-gray-900",
  subtitle: "text-gray-500 text-sm mt-0.5",
  grid: "grid grid-cols-1 xl:grid-cols-3 gap-5 sm:gap-6",
  leftColumn: "xl:col-span-2",
  card: "bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6",
  cardHeader: "flex items-center gap-3 mb-6 pb-5 border-b border-gray-100",
  iconContainer: "w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0",
  cardTitle: "text-sm font-semibold text-gray-900",
  cardSubtitle: "text-xs text-gray-500",
  formSpace: "space-y-4",
  fieldLabel: "block text-sm font-medium text-gray-700 mb-1.5",
  inputWrapper: "relative",
  inputLeftIcon: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
  inputField: "w-full pl-9 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors",
  showPasswordButton: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
  submitButtonContainer: "pt-2",
  submitButton: "w-full py-3 bg-gray-900 hover:bg-black text-white font-semibold rounded-xl transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed",
  rightColumn: "space-y-5",
  requirementCard: "bg-white rounded-xl border border-gray-200 shadow-sm p-5",
  requirementsHeader: "flex items-center gap-2 mb-4",
  requirementsTitle: "text-sm font-semibold text-blue-700",
  requirementsList: "space-y-2.5",
  requirementItem: "flex items-center gap-2.5",
  reqCircleBase: "w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors",
  reqCircleMet: "bg-green-100",
  reqCircleNotMet: "bg-gray-100",
  reqCircleDot: "w-2 h-2 rounded-full bg-gray-300",
  reqLabelBase: "text-xs transition-colors",
  reqLabelMet: "text-green-700 font-medium",
  reqLabelNotMet: "text-gray-500",
  progressBarContainer: "mt-4",
  progressBarOuter: "h-1.5 w-full bg-gray-100 rounded-full overflow-hidden",
  progressBarInnerBase: "h-full rounded-full transition-all duration-300",
  progressBarInnerComplete: "bg-green-600",
  progressBarInnerIncomplete: "bg-blue-500",
  progressText: "text-xs text-gray-400 mt-1.5",
  tipCard: "bg-white rounded-xl border border-gray-200 shadow-sm p-5",
  tipTitle: "text-sm font-semibold text-gray-800 mb-4",
  tipList: "space-y-2",
  tipItem: "flex items-start gap-2 text-xs text-gray-600",
  tipBullet: "text-gray-400 mt-0.5",
};

export const depositWithdrawStyles = {
  pageContainer: "p-6 bg-gray-50 min-h-screen",
  header: "mb-6",
  title: "text-2xl font-bold text-gray-900",
  subtitle: "text-gray-500 text-sm mt-0.5",
  maxWidth: "max-w-lg",
  card: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden",
  cardInner: "p-6",
  form: "space-y-5",
  label: "block text-sm font-medium text-gray-700 mb-1.5",
  selectWrapper: "relative",
  select: "w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors appearance-none cursor-pointer pr-9",
  selectIcon: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400",
  warningsContainer: "space-y-2",
  savingsWarning: "p-3 bg-yellow-50 border border-yellow-100 rounded-lg text-xs text-yellow-700 flex items-start gap-1",
  warningIcon: "shrink-0 mt-0.5",
  currentWarning: "p-3 bg-orange-50 border border-orange-100 rounded-lg text-xs text-orange-700 flex items-start gap-1",
  amountWrapper: "relative",
  rupeeSymbol: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-sm",
  amountInput: "w-full pl-7 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors",
  descriptionInput: "w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors",
  warningBanner: "p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2 text-xs text-yellow-800",
  warningBannerIcon: "shrink-0",
  submitButton: "w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-50 text-sm",
};

export const miniStatementStyles = {
  pageContainer: "p-4 sm:p-6 bg-gray-50 min-h-screen",
  printHeader: "hidden print:block mb-8 pb-4 border-b-2 border-blue-600",
  printHeaderRow: "flex justify-between items-start",
  printHeaderTitle: "text-2xl font-bold text-blue-600 tracking-tight",
  printHeaderSubtitle: "text-[10px] text-gray-500 font-medium uppercase tracking-widest mt-1",
  printHeaderMeta: "text-right text-[10px] text-gray-400 font-mono",
  screenHeader: "print:hidden mb-5 sm:mb-6",
  screenTitle: "text-xl sm:text-2xl font-bold text-gray-900",
  screenSubtitle: "text-gray-500 text-sm mt-0.5",
  printAccountRow: "hidden print:grid grid-cols-4 gap-6 p-4 mb-6 bg-gray-50 border border-gray-200 rounded-lg",
  printAccountLabel: "text-[8px] text-gray-400 uppercase font-bold tracking-tighter",
  printAccountValue: "text-xs font-bold text-gray-900 truncate",
  mainCard: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden print:border-none print:shadow-none",
  controlsRow: "p-4 sm:p-5 border-b border-gray-100 print:hidden",
  controlsFlex: "flex flex-wrap gap-3 sm:gap-4 items-end justify-between",
  selectorsGroup: "flex flex-wrap gap-3 sm:gap-4",
  buttonsGroup: "flex gap-2",
  printButton: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg",
  downloadButton: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-900 hover:bg-black text-white text-sm font-medium rounded-lg",
  loadingContainer: "flex items-center justify-center py-16",
  spinner: "w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin",
  contentContainer: "p-4 sm:p-5",
  accountInfoCard: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-4 mb-5 bg-gray-50 border border-gray-200 rounded-xl print:hidden",
  bankName: "text-base font-bold text-gray-900",
  accountStatementLabel: "text-xs text-gray-500",
  accountDetailsContainer: "text-left sm:text-right",
  accountName: "text-sm font-semibold text-gray-800",
  balanceLabel: "text-xs text-gray-500",
  balanceAmount: "font-bold text-gray-800",
  generatedText: "text-xs text-gray-500",
  printTableContainer: "hidden print:block",
  printTable: "w-full border-collapse",
  printTheadRow: "bg-blue-600 text-white text-[10px] text-left",
  printThBase: "px-3 py-2 font-bold",
  printThRight: "text-right",
  printTbody: "text-[10px]",
  printRowEven: "bg-white",
  printRowOdd: "bg-gray-50",
  printTdBase: "px-3 py-2 border-b border-gray-100",
  printTdFontMono: "font-mono",
  printTdMedium: "font-medium",
  printTdCapitalize: "capitalize",
  printCrDrBase: "px-2 py-0.5 rounded-full font-bold",
  printCr: "bg-green-100 text-green-700",
  printDr: "bg-red-100 text-red-700",
  printAmountTdBase: "text-right font-bold",
  printAmountCredit: "text-green-600",
  printAmountDebit: "text-red-600",
  printBalanceTd: "text-right text-gray-500",
  printFooterRow: "mt-12 flex justify-between items-end border-t pt-4 border-gray-200",
  printFooterLeft: "text-[9px] text-gray-400",
  printSeal: "w-24 h-8 bg-gray-50 border border-gray-200 rounded flex items-center justify-center text-[8px] text-gray-300 font-bold uppercase tracking-widest",
  emptyState: "flex flex-col items-center justify-center py-16 text-center print:hidden",
  emptyIcon: "mb-3 text-gray-400",
  emptyText: "text-gray-500 font-medium",
  transactionList: "divide-y divide-gray-100 print:hidden",
  transactionRow: "flex items-center gap-3 sm:gap-4 py-3 sm:py-4 hover:bg-gray-50 transition-colors px-1",
  txIconBase: "w-9 h-9 rounded-full flex items-center justify-center shrink-0",
  txIconCredit: "bg-green-100 text-green-600",
  txIconDebit: "bg-red-100 text-red-600",
  txDetail: "flex-1 min-w-0",
  txDescription: "text-sm font-semibold text-gray-800 truncate",
  txMeta: "flex flex-wrap items-center gap-1.5 mt-0.5",
  txDate: "text-xs text-gray-500",
  txBadgeBase: "text-xs font-medium px-1.5 py-0.5 rounded-full",
  txBadgeCredit: "bg-green-50 text-green-700",
  txBadgeDebit: "bg-red-50 text-red-600",
  txType: "text-xs text-gray-400 capitalize",
  txAmountContainer: "text-right shrink-0",
  txAmountBase: "text-sm font-bold",
  txAmountCredit: "text-green-600",
  txAmountDebit: "text-red-500",
  txBalanceAfter: "text-xs text-gray-400 mt-0.5",

  // SelectWrapper inner component styles
  selectLabel: "block text-xs font-medium text-gray-600 mb-1.5",
  selectWrapper: "relative",
  selectField: "px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 appearance-none cursor-pointer pr-8",
  selectChevron: "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400",
};

export const moneyRequestsStyles = {
  pageContainer: "p-6 bg-gray-50 min-h-screen",
  header: "mb-6",
  title: "text-2xl font-bold text-gray-900 flex items-center gap-2",
  titleIcon: "text-blue-600",
  subtitle: "text-gray-500 text-sm mt-0.5",
  tabBar: "flex flex-wrap gap-2 mb-6",
  tabButtonBase: "relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all border",
  tabButtonActive: "bg-blue-600 text-white border-blue-600 shadow-sm",
  tabButtonInactive: "bg-white text-gray-600 border-gray-200",
  badge: "w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs rounded-full font-bold ml-1",
  mainCard: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden min-h-64",
  innerSection: "p-5",
  emptyState: "py-20 text-center",
  emptyIcon: "mx-auto text-gray-300 mb-4",
  emptyTitle: "font-semibold text-gray-700",
  listDivider: "divide-y",
  receivedRow: "flex flex-col sm:flex-row justify-between gap-4 py-4",
  rowLeft: "flex gap-3",
  avatarYellow: "w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center",
  avatarIcon: "text-yellow-600",
  recipientName: "text-sm font-semibold",
  description: "text-xs text-gray-500",
  rowRight: "flex items-center gap-4 ml-auto",
  amountRight: "text-right",
  amountBold: "font-bold",
  actionText: "text-xs text-yellow-600 font-semibold",
  buttonsRow: "flex gap-2",
  payButton: "px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg",
  rejectButton: "px-4 py-2 bg-white border text-gray-600 text-xs font-semibold rounded-lg",
  sentEmpty: "py-20 text-center",
  sentEmptyTitle: "font-semibold",
  createButton: "mt-4 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl",
  sentRow: "flex justify-between py-4",
  sentLeft: "flex gap-3",
  sentAvatar: "w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500",
  sentRecipientName: "text-sm font-semibold",
  sentDate: "text-xs text-gray-400",
  sentAmount: "text-right",
  sentAmountBold: "font-bold",
  newRequestSection: "p-6 max-w-lg",
  newRequestTitle: "font-bold mb-6",
  formSpace: "space-y-4",
  label: "block text-sm mb-1.5",
  select: "w-full px-3 py-2.5 bg-gray-50 border rounded-lg text-sm",
  input: "w-full px-3 py-2.5 bg-gray-50 border rounded-lg text-sm",
  twoColGrid: "grid grid-cols-2 gap-4",
  submitButton: "w-full py-3 bg-blue-600 text-white font-semibold rounded-xl",
  modalOverlay: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
  modalContent: "bg-white rounded-2xl w-full max-w-md p-6",
  modalTitle: "text-lg font-bold mb-2",
  modalText: "text-sm text-gray-500 mb-5",
  darkCard: "p-4 bg-gray-900 rounded-xl mb-5 flex justify-between",
  darkCardLabel: "text-xs text-gray-400",
  darkCardAmount: "text-2xl font-bold text-white",
  darkCardIcon: "text-gray-400",
  modalButtons: "flex gap-3",
  modalCancel: "flex-1 py-2.5 bg-gray-100 rounded-xl text-sm",
  modalAccept: "flex-1 py-2.5 text-white rounded-xl text-sm",
  modalAcceptBg: "bg-blue-600",
  modalRejectBg: "bg-red-600",

  // Status badge styles (used in statusBadge helper)
  statusBadgeBase: "px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase",
  statusPending: "bg-yellow-100 text-yellow-700",
  statusAccepted: "bg-green-100 text-green-700",
  statusRejected: "bg-red-100 text-red-700",
  statusDefault: "bg-gray-100 text-gray-700",
};

export const newAccountStyles = {
  pageContainer: "p-6 bg-gray-50 min-h-screen",
  header: "mb-6",
  title: "text-2xl font-bold text-gray-900",
  subtitle: "text-gray-500 text-sm mt-0.5",
  allTakenBanner: "flex items-start gap-3 p-4 mb-5 bg-red-50 border border-red-200 rounded-xl",
  banIcon: "text-red-500 mt-0.5 shrink-0",
  allTakenTitle: "text-sm font-semibold text-red-900",
  allTakenDesc: "text-xs text-red-700 mt-0.5",
  ownedBanner: "flex items-start gap-3 p-4 mb-5 bg-blue-50 border border-blue-200 rounded-xl",
  infoIcon: "mt-0.5 shrink-0",
  ownedTitle: "text-sm font-semibold text-blue-900",
  ownedDesc: "text-xs text-blue-700 mt-0.5",
  formCard: "bg-white rounded-xl border border-gray-200 shadow-sm p-6",
  formSpace: "space-y-6",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  fieldLabel: "block text-sm font-medium text-gray-700 mb-1.5",
  requiredStar: "text-red-500",
  inputReadOnly: "w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 cursor-not-allowed",
  inputActive: "w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors",
  accountTypeHeading: "text-sm font-semibold text-gray-700 mb-3",
  accountTypeList: "space-y-3",
  accountTypeLabelBase: "flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all",
  accountTypeOwned: "border-red-200 bg-red-50 opacity-70 cursor-not-allowed",
  accountTypeSelected: "border-blue-500 bg-blue-50",
  accountTypeDefault: "border-gray-200 bg-white hover:border-gray-300",
  radioInput: "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500",
  accountTypeNameBase: "text-sm font-semibold",
  accountTypeNameOwned: "text-red-600",
  accountTypeNameDefault: "text-gray-900",
  alreadyOwnedBadge: "text-xs font-semibold text-red-600 bg-red-100 px-2 py-0.5 rounded",
  accountTypeDesc: "text-xs text-gray-500 mt-0.5",
  accountTypeMin: "text-[10px] font-bold text-blue-600 mt-1 uppercase tracking-wider",
  depositWrapper: "relative max-w-xs",
  rupeeSymbol: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm",
  depositInput: "w-full pl-7 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors",
  rulesBox: "p-4 bg-blue-50 border border-blue-200 rounded-xl",
  rulesHeader: "flex items-center gap-2 mb-2",
  rulesTitle: "text-sm font-semibold text-blue-900",
  rulesList: "space-y-1",
  rulesItem: "text-xs text-blue-800",
  buttonsRow: "flex gap-3",
  submitButton: "flex-1 py-3 bg-gray-900 hover:bg-black text-white font-semibold rounded-xl transition-colors disabled:opacity-50 text-sm",
  clearButton: "px-8 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold rounded-xl transition-colors text-sm",
};

export const transactionStyles = {
  loadingContainer: "flex items-center justify-center min-h-screen",
  spinner: "w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin",
  pageContainer: "p-6 bg-gray-50 min-h-screen",
  header: "mb-6",
  title: "text-2xl font-bold text-gray-900",
  subtitle: "text-gray-500 text-sm mt-0.5",
  card: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden",
  cardHeader: "p-5 border-b border-gray-100 flex items-center justify-between",
  cardHeaderTitle: "text-sm font-semibold text-gray-700",
  badge: "text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full",
  emptyContainer: "flex flex-col items-center justify-center py-20 text-center",
  emptyIcon: "text-gray-300 mb-4",
  emptyText: "text-gray-500 font-medium",
  listDivider: "divide-y divide-gray-100",
  transactionRow: "flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors",
  iconBase: "w-9 h-9 rounded-full flex items-center justify-center shrink-0",
  iconBgInternal: "bg-purple-100",
  iconBgCredit: "bg-green-100",
  iconBgDebit: "bg-red-100",
  iconColorInternal: "text-purple-600",
  iconColorCredit: "text-green-600",
  iconColorDebit: "text-red-500",
  transactionDetail: "flex-1 min-w-0",
  label: "text-sm font-semibold text-gray-800 truncate",
  date: "text-xs text-gray-500 mt-0.5",
  amountContainer: "text-right shrink-0",
  amountBase: "text-sm font-bold",
  txId: "text-xs text-gray-400 font-mono mt-0.5",
};

export const transferStyles = {
  pageContainer: "p-6 bg-gray-50 min-h-screen",
  header: "mb-6",
  title: "text-2xl font-bold text-gray-900",
  subtitle: "text-gray-500 text-sm mt-0.5",
  maxWidth: "max-w-lg",
  card: "bg-white rounded-xl border border-gray-200 shadow-sm p-6",
  cardTitle: "text-sm font-semibold text-gray-800 mb-1",
  cardSubtitle: "text-xs text-gray-500 mb-6",
  formSpace: "space-y-5",
  fieldLabel: "block text-sm font-medium text-gray-700 mb-1.5",
  selectWrapper: "relative",
  selectField: "w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors appearance-none cursor-pointer pr-9",
  selectIcon: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400",
  balanceText: "text-xs text-blue-600 mt-1 font-medium",
  inputRecipient: "w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono focus:outline-none focus:border-blue-500 focus:bg-white transition-colors",
  amountWrapper: "relative",
  rupeeSymbol: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium",
  amountInput: "w-full pl-7 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors",
  descriptionInput: "w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors",
  infoBanner: "p-3 bg-blue-50 border border-blue-100 rounded-lg flex items-start gap-2 text-xs text-blue-800",
  infoIcon: "mt-0.5 shrink-0",
  buttonsRow: "flex gap-3",
  submitButton: "flex-1 py-3 bg-gray-900 hover:bg-black text-white font-semibold rounded-xl transition-colors disabled:opacity-50 text-sm",
  clearButton: "px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold rounded-xl transition-colors text-sm",
};

export const userAccountsStyles = {
  loadingContainer: "flex items-center justify-center min-h-screen",
  spinner: "w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin",
  pageContainer: "p-6 max-w-7xl mx-auto",
  headerRow: "flex items-center justify-between mb-6",
  title: "text-2xl font-bold text-gray-900",
  subtitle: "text-sm text-gray-500 mt-0.5",
  newAccountBtn: "flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm",
  sectionLabel: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4",
  cardGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
  activeCard: "rounded-2xl p-5 text-white relative overflow-hidden shadow-lg",
  pendingCard: "opacity-60 rounded-2xl p-5 text-white relative overflow-hidden",
  rejectedCard: "bg-gray-400 opacity-50 rounded-2xl p-5 text-white relative overflow-hidden",
  circleTopRight: "absolute -top-6 -right-6 w-24 h-24 bg-white opacity-10 rounded-full",
  circleBottomRight: "absolute -bottom-4 right-10 w-16 h-16 bg-white opacity-5 rounded-full",
  cardContent: "relative z-10",
  cardHeader: "flex items-center justify-between mb-2",
  accountTypeTag: "text-xs font-semibold uppercase tracking-wider opacity-70",
  activeBadge: "text-xs bg-green-400 text-white px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1",
  pendingBadge: "text-xs bg-yellow-400 text-white px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1",
  rejectedBadge: "text-xs bg-red-400 text-white px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1",
  accountNameActive: "text-base font-bold mb-4",
  accountNamePending: "text-base font-bold mb-4",
  accountNameRejected: "text-base font-bold mb-2",
  balanceLabel: "text-xs opacity-60 mb-1",
  balanceActive: "text-3xl font-bold mb-4",
  balancePending: "text-2xl font-bold mb-4",
  footerRow: "border-t border-white border-opacity-20 pt-3 flex items-center justify-between",
  accountNumber: "font-mono text-sm opacity-70",
  copyButton: "flex items-center gap-1.5 text-xs bg-black/30 hover:bg-black/50 text-white px-3 py-1.5 rounded-lg transition-colors font-semibold",
  rejectionReason: "text-xs opacity-70 mt-1",
  emptyContainer: "bg-white border border-gray-200 rounded-xl p-16 text-center shadow-sm",
  emptyIcon: "text-gray-300 mx-auto mb-4",
  emptyTitle: "text-lg font-semibold text-gray-800 mb-2",
  emptyText: "text-sm text-gray-500 mb-5",
  emptyButton: "px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors",
  summaryContainer: "mt-6 bg-white border border-gray-200 rounded-xl p-6 shadow-sm",
  summaryTitle: "text-sm font-bold text-gray-900 mb-4",
  summaryGrid: "grid grid-cols-2 gap-6",
  summaryLabel: "text-xs text-gray-500 mb-1",
  summaryValue: "text-xl font-bold text-gray-900",
};

export const userDashboardStyles = {
  loadingContainer: "flex items-center justify-center min-h-screen",
  spinner: "w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin",
  pageContainer: "p-4 sm:p-6 max-w-7xl mx-auto",
  header: "mb-5 sm:mb-6",
  title: "text-xl sm:text-2xl font-bold text-gray-900",
  subtitle: "text-sm text-gray-500 mt-0.5",
  statsGrid: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-6",
  statCard: "bg-white border border-gray-200 rounded-xl p-3 sm:p-4 flex items-center justify-between shadow-sm",
  statLabel: "text-xs font-semibold text-gray-500 mb-1 truncate",
  statValueBase: "text-lg sm:text-2xl font-bold",
  statIconContainerBase: "w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-lg sm:text-xl ml-2 shrink-0",
  quickActionsContainer: "bg-white border border-gray-200 rounded-xl p-4 sm:p-5 mb-5 sm:mb-6 shadow-sm",
  quickActionsLabel: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 sm:mb-5",
  quickActionsGrid: "grid grid-cols-4 gap-2 sm:gap-4",
  quickActionButton: "flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors group",
  quickActionIconContainerBase: "w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform text-white",
  quickActionText: "text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight",
  mainGrid: "grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6",
  sectionHeader: "flex items-center justify-between mb-3 sm:mb-4",
  sectionTitle: "text-base font-bold text-gray-900",
  viewAllBtn: "text-sm font-semibold text-blue-600 hover:text-blue-700",
  accountsList: "space-y-4",
  emptyAccountCard: "bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-400 text-sm",
  emptyAccountBtn: "text-blue-600 font-semibold",
  accountCardBase: "rounded-2xl p-4 sm:p-5 text-white relative overflow-hidden shadow-lg",
  accountCircleTop: "absolute -top-6 -right-6 w-28 h-28 bg-white opacity-10 rounded-full",
  accountCircleBottom: "absolute -bottom-4 -right-4 w-16 h-16 bg-white opacity-5 rounded-full",
  accountContent: "relative z-10",
  accountCardHeader: "flex items-center justify-between mb-1",
  accountTypeLabel: "text-xs font-semibold capitalize opacity-70",
  activeDot: "text-xs bg-green-400 text-white px-2.5 py-0.5 rounded-full font-semibold",
  accountName: "text-base font-bold mb-3 sm:mb-4",
  balanceLabel: "text-xs opacity-60 mb-1",
  balance: "text-2xl sm:text-3xl font-bold mb-3 sm:mb-4",
  accountFooter: "border-t border-white border-opacity-20 pt-3 flex items-center justify-between",
  accountNumberText: "font-mono text-sm opacity-70",
  copyBtn: "flex items-center gap-1.5 text-xs bg-black/30 hover:bg-black/50 text-white px-3 py-1.5 rounded-lg transition-colors font-semibold",
  transactionsContainer: "bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden",
  emptyTransactions: "p-8 text-center text-gray-400 text-sm",
  transactionsList: "divide-y divide-gray-50",
  transactionRow: "flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors",
  txIconContainer: "w-9 h-9 rounded-full flex items-center justify-center shrink-0",
  txDetails: "flex-1 min-w-0",
  txLabel: "text-sm font-semibold text-gray-800 truncate",
  txDate: "text-xs text-gray-400",
  txAmountBase: "text-sm font-bold shrink-0",
  progressBarOuter: "w-full sm:w-24 h-1.5 bg-gray-200 rounded-full mt-1.5",
  progressBarFill: "h-1.5 bg-blue-500 rounded-full transition-all duration-500",
};

export const userLayoutStyles = {
  // Root flex container
  rootContainer: "flex min-h-screen bg-gray-50",
  // Desktop sidebar
  desktopSidebar: "fixed top-0 left-0 h-full w-60 bg-gray-900 flex-col z-50 shadow-xl hidden lg:flex print:hidden",
  // Mobile overlay container
  mobileOverlay: "fixed inset-0 z-50 lg:hidden",
  // Overlay backdrop
  overlayBackdrop: "absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity duration-300",
  // Mobile sidebar panel
  mobileSidebar: "relative w-64 h-full bg-gray-900 flex flex-col shadow-2xl animate-in slide-in-from-left duration-300",
  // Main content wrapper
  mainWrapper: "flex-1 lg:ml-60 flex flex-col min-h-screen max-w-full overflow-x-hidden print:ml-0",
  // Header bar
  header: "h-16 bg-white border-b border-gray-200 flex items-center justify-between px-3 sm:px-6 sticky top-0 z-40 shadow-sm print:hidden",
  // Mobile menu button
  menuButton: "lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors",
  // Hidden spacer
  hiddenSpacer: "hidden lg:block",
  // Notification + user area
  rightGroup: "flex items-center gap-3 sm:gap-4",
  // User info row
  userInfoRow: "flex items-center gap-2 sm:gap-3",
  // User text container
  userTextContainer: "text-right hidden sm:block",
  // User name text
  userName: "text-sm font-semibold text-gray-800 leading-tight",
  // User role text
  userRole: "text-xs text-gray-500 font-medium",
  // Avatar circle
  avatarCircle: "w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-sm",
  // Main content area
  mainContent: "flex-1 overflow-auto",

  // === Sidebar inner styles ===
  brandContainer: "px-5 py-5 border-b border-gray-800",
  brandLogoContainer: "w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shrink-0",
  brandName: "text-white font-bold text-base leading-none tracking-tight",
  brandSubtitle: "text-gray-400 text-xs mt-0.5 font-medium",
  // Navigation
  nav: "flex-1 px-3 py-4 space-y-0.5 overflow-y-auto",
  navLinkBase: "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 group",
  navLinkActive: "bg-linear-to-r from-blue-600/20 to-blue-600/5 text-blue-400 shadow-[inset_3px_0_0_0_#3b82f6]",
  navLinkInactive: "text-gray-400 hover:bg-gray-800/50 hover:text-white",
  navIcon: "group-hover:scale-110 transition-transform shrink-0",
  // Footer / profile
  profileContainer: "px-3 py-4 border-t border-gray-800",
  profileFlex: "flex items-center gap-2.5",
  profileAvatar: "w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0",
  profileTextWrapper: "flex-1 min-w-0",
  profileName: "text-white text-sm font-semibold truncate leading-tight",
  profileRole: "text-gray-400 text-xs font-medium",
  logoutButton: "text-gray-400 hover:text-white transition-colors shrink-0 p-1.5 rounded hover:bg-gray-800",
};

export const notificationBellStyles = {
  // Container
  container: "relative",
  // Button
  bellButton: "relative inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 sm:h-9 sm:w-9",
  bellIcon: "sm:size-5",
  // Unread badge
  badge: "absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold leading-none text-white ring-2 ring-white sm:right-0 sm:top-0",
  // Dropdown panel (mobile & desktop)
  dropdownPanel: "fixed left-2 right-2 top-16 z-50 max-h-[75vh] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl sm:absolute sm:left-auto sm:right-0 sm:top-full sm:mt-3 sm:w-96 sm:max-w-[calc(100vw-2rem)] md:w-[26rem]",
  // Header bar
  headerBar: "flex items-center justify-between gap-3 border-b border-gray-50 bg-gray-50/60 p-3 sm:p-4",
  headerTitle: "flex items-center gap-2 font-bold text-gray-800 text-sm sm:text-base",
  unreadCountBadge: "rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-medium text-blue-600 sm:text-xs",
  markAllBtn: "flex items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-60",
  markAllTextDesktop: "hidden xs:inline",
  markAllTextMobile: "xs:hidden",
  // Scrollable list
  scrollList: "max-h-[60vh] overflow-y-auto sm:max-h-[65vh]",
  // Empty state
  emptyState: "p-6 text-center sm:p-8",
  emptyIconContainer: "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100",
  emptyIcon: "text-gray-400",
  emptyText: "text-sm text-gray-500",
  // List divider
  listDivider: "divide-y divide-gray-50",
  // Notification row
  notifRow: "group relative p-3 transition-colors hover:bg-gray-50 sm:p-4",
  notifRowUnread: "bg-blue-50/30",
  notifInner: "flex gap-3",
  // Icon container base & variants
  iconBase: "mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10",
  iconTransaction: "bg-green-100 text-green-600",
  iconAlert: "bg-red-100 text-red-600",
  iconOther: "bg-blue-100 text-blue-600",
  // Content
  contentArea: "min-w-0 flex-1",
  contentHeader: "flex items-start justify-between gap-2",
  messageText: "text-sm leading-snug",
  messageUnread: "font-semibold text-gray-900",
  messageRead: "text-gray-600",
  // Mark as read button (inside row, only visible on hover)
  markReadBtn: "rounded p-1 text-blue-600 transition-all hover:bg-blue-100 hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100",
  // Date/time
  timeRow: "mt-1.5 flex items-center gap-1.5 text-[11px] font-medium text-gray-400",
};

export const adminPanelStyles = {
  // Container
  container:
    "bg-white rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(17,24,39,0.18),0_2px_8px_rgba(0,0,0,0.08)]",
  // Header
  header:
    "relative overflow-hidden px-8 pt-8 pb-8 flex flex-col items-center text-center bg-linear-to-br from-[#0f172a] via-[#1e3a8a] to-[#1d4ed8]",
  // Shield icon
  shieldBase:
    "w-16 h-16 rounded-2xl flex items-center justify-center mb-4 relative z-10 bg-blue-500/25 border border-blue-400/35 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.3)] transition-all duration-700 delay-50",
  // Title
  titleBase:
    "text-xl font-bold text-white mb-1 transition-all duration-700 delay-120",
  // Subtitle
  subtitleBase:
    "text-blue-200 text-sm transition-all duration-700 delay-190",
  // Secured badge
  securedBadgeBase:
    "mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold relative z-10 bg-green-500/20 border border-green-500/40 text-green-300 transition-all duration-700 delay-600",
  // Animated visibility classes (reusable)
  visibleOpacity: "opacity-100",
  hiddenOpacity: "opacity-0",
  scale100: "scale-100",
  scale95: "scale-95",
  translateY0: "translate-y-0",
  translateY4: "translate-y-4",
  // Green dot
  greenDot:
    "w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse inline-block",
  // Form
  formContainer: "bg-white px-8 py-7",
  formSpacing: "space-y-4",
  label: "block text-sm font-semibold text-gray-700 mb-2",

  // AnimInput
  inputWrapperBase:
    "flex items-center gap-3 px-4 py-3 bg-white border rounded-xl transition-all duration-200",
  inputWrapperFocusedExtras:
    "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.15)]",
  inputWrapperUnfocusedExtras:
    "border-gray-200 shadow-sm shadow-black/5",
  iconBase: "shrink-0 transition-colors duration-200",
  iconColorFocused: "text-blue-500",
  iconColorUnfocused: "text-gray-400",
  inputField:
    "flex-1 text-sm font-medium text-gray-900 bg-transparent focus:outline-none placeholder:text-gray-400 caret-blue-500",
  togglePasswordButton:
    "text-gray-400 hover:text-gray-600 shrink-0 transition-colors",

  // RippleButton
  rippleButtonBase:
    "relative overflow-hidden group after:absolute after:inset-0 after:-translate-x-full after:bg-linear-to-r after:from-transparent after:via-white/20 after:to-transparent after:skew-x-[-20deg] hover:after:translate-x-full after:transition-transform after:duration-700 after:ease-in-out",
  ripple:
    "absolute rounded-full bg-white/30 pointer-events-none animate-ping",
  // Submit button core
  submitButtonCore:
    "w-full py-3 text-white text-sm font-bold rounded-xl transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2",
  buttonLoadingBg: "bg-blue-700/60",
  buttonNormalBg: "bg-blue-600 hover:bg-blue-700",

  // LoadingDots
  loadingContainer: "inline-flex items-center gap-1",
  loadingDotBase:
    "w-1.5 h-1.5 rounded-full bg-current animate-bounce inline-block",
  loadingDotDelay0: "[animation-delay:0ms]",
  loadingDotDelay150: "[animation-delay:150ms]",
  loadingDotDelay300: "[animation-delay:300ms]",
};

export const authPageStyles = {
  // Root
  root: "min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]",
  // Mobile header
  mobileHeader: "lg:hidden bg-linear-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#7c3aed] relative overflow-hidden shrink-0 min-h-[220px]",
  mobileHeaderInner: "relative z-10 px-6 pt-10 pb-8",
  mobileBrandRow: "transition-all duration-700 delay-100 flex items-center gap-3 mb-6",
  mobileBrandIcon: "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-white/20 border border-white/30 backdrop-blur-md",
  mobileBrandName: "text-white font-bold text-lg leading-none",
  mobileBrandSub: "text-blue-200 text-xs mt-0.5",
  mobileTitle: "transition-all duration-700 delay-200 text-3xl font-extrabold text-white leading-tight mb-2",
  mobileSubtitle: "transition-all duration-700 delay-300 text-blue-100 text-sm leading-relaxed mb-6",
  mobileTagsRow: "transition-all duration-700 delay-400 flex flex-wrap gap-2",
  mobileTag: "flex items-center gap-1.5 text-xs font-semibold text-white px-3 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md",
  mobileBottomCurve: "absolute bottom-0 left-0 w-full h-9 bg-[#f8fafc] rounded-t-[100%]",
  // Desktop left panel
  desktopPanel: "hidden lg:flex lg:w-1/2 flex-col justify-between p-14 relative overflow-hidden bg-linear-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#7c3aed]",
  desktopBrandRow: "relative z-10 transition-all duration-700 delay-50 flex items-center gap-3",
  desktopBrandIcon: "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-white/15 border border-white/25 backdrop-blur-md",
  desktopBrandName: "text-white font-bold text-lg leading-none",
  desktopBrandSub: "text-blue-200 text-xs mt-0.5",
  desktopHeroWrapper: "relative z-10",
  desktopTitleWrapper: "transition-all duration-700 delay-120 mb-2",
  desktopTitle: "text-5xl font-extrabold leading-tight tracking-tight text-white",
  desktopSubtitle: "transition-all duration-700 delay-190 text-blue-100 text-base leading-relaxed mb-12 max-w-sm",
  // Feature grid
  featureGrid: "grid grid-cols-2 gap-4",
  featureCardBase: "group transition-all duration-500 rounded-2xl p-5 cursor-default bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl hover:border-white/40",
  featureIcon: "text-white mb-3 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-blue-200",
  featureTitle: "text-white font-bold text-sm mb-1",
  featureDesc: "text-blue-200 text-xs leading-relaxed",
  desktopCopyright: "relative z-10 text-blue-300 text-xs",
  // Right panel
  rightPanel: "flex-1 flex flex-col items-center justify-start lg:justify-center px-4 sm:px-6 py-6 overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-[#f8fafc]",
  switcherWrapper: "w-full max-w-md mb-5 transition-all duration-700 delay-50",
  switcherFlex: "flex gap-1 p-1 rounded-2xl shadow-sm bg-white border border-gray-200",
  switcherButtonBase: "flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300",
  switcherActiveUser: "bg-blue-600 text-white shadow-md",
  switcherActiveAdmin: "bg-[#111827] text-white shadow-md",
  switcherInactive: "text-gray-500 hover:text-gray-800 hover:bg-gray-50",
  // Panel card
  cardWrapper: "w-full max-w-md transition-all duration-500",
  // Footer
  footerText: "transition-all duration-700 delay-600 text-gray-400 text-xs mt-5 text-center",
  // Reusable animation states
  visible: "opacity-100",
  hidden: "opacity-0",
  translateY0: "translate-y-0",
  translateY8: "translate-y-8",
  scale100: "scale-100",
  scale95: "scale-95",
  // Feature delays
  featureDelay0: "delay-[150ms]",
  featureDelay1: "delay-[230ms]",
  featureDelay2: "delay-[310ms]",
  featureDelay3: "delay-[390ms]",
};

export const forgotPasswordStyles = {
  // Overlay
  overlay:
    "fixed inset-0 flex items-center justify-center z-50 p-4 bg-slate-900/65 backdrop-blur-md transition-opacity duration-300",
  // Modal
  modal:
    "bg-white rounded-2xl w-full max-w-md shadow-[0_24px_64px_rgba(0,0,0,0.22)]",
  // Header
  headerRow:
    "flex items-center justify-between px-6 py-5 border-b border-gray-100",
  title: "text-lg font-bold text-gray-900",
  subtitle: "text-xs text-gray-500 mt-0.5",
  closeBtn:
    "w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 transition-colors",
  // Body
  body: "px-6 py-5",
  // Step indicator
  stepBar: "flex items-center gap-2 mb-6",
  stepCircleBase:
    "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
  stepActive: "bg-blue-500 text-white",
  stepCompleted: "bg-green-500 text-white",
  stepInactive: "bg-gray-200 text-slate-400",
  connector: "flex-1 h-0.5 transition-all duration-500",
  connectorActive: "bg-blue-500",
  connectorInactive: "bg-gray-200",
  // Forms
  formSpace: "space-y-4",
  label: "block text-sm font-semibold text-gray-700 mb-1.5",
  // Buttons
  primaryBtn:
    "w-full py-3 text-white font-semibold rounded-xl text-sm disabled:opacity-50 cursor-pointer bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 transition-colors",
  secondaryBtn:
    "flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold rounded-xl text-sm transition-colors",
  verifyBtn:
    "flex-1 py-3 text-white font-semibold rounded-xl text-sm disabled:opacity-50 cursor-pointer bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 transition-colors",
  updateBtn:
    "w-full py-3 text-white font-semibold rounded-xl text-sm disabled:opacity-50 cursor-pointer bg-[#111827] hover:bg-black flex items-center justify-center gap-2 transition-colors",
  // Timer banner
  timerBanner:
    "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
  timerActiveBg: "bg-blue-50 text-blue-700",
  timerExpiredBg: "bg-red-50 text-red-600",
  // Resend
  resendContainer: "mt-5 text-center",
  resendText: "text-xs text-gray-500",
  resendLinkBase: "font-bold transition-all duration-300",
  resendLinkDisabled: "text-gray-400 cursor-not-allowed",
  resendLinkEnabled: "text-blue-600 hover:text-blue-700",
  // PwToggle
  pwToggle: "text-gray-400 hover:text-gray-600 transition-colors",
  // AnimInput
  inputWrapperBase:
    "flex items-center gap-3 px-4 py-3 bg-white border rounded-xl transition-all duration-200",
  inputWrapperFocusedExtras:
    "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.15)]",
  inputWrapperUnfocusedExtras: "border-gray-200 shadow-sm shadow-black/5",
  iconBase: "shrink-0 transition-colors duration-200",
  iconFocused: "text-blue-500",
  iconUnfocused: "text-gray-400",
  inputField:
    "flex-1 text-sm font-medium text-gray-900 bg-transparent focus:outline-none placeholder:text-gray-400 caret-blue-500",
  // LoadingDots
  loadingContainer: "inline-flex items-center gap-1",
  loadingDot: "w-1.5 h-1.5 rounded-full bg-current animate-bounce inline-block",
  loadingDotDelay0: "[animation-delay:0ms]",
  loadingDotDelay150: "[animation-delay:150ms]",
  loadingDotDelay300: "[animation-delay:300ms]",
};

export const userPanelStyles = {
  // Container
  container: "bg-white rounded-2xl shadow-[0_8px_40px_rgba(59,130,246,0.1),0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden",
  // Tab bar
  tabBar: "flex bg-gray-50 border-b p-1 m-4 rounded-xl",
  tabButton: "flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all",
  tabActive: "bg-white text-gray-900 shadow-sm",
  tabInactive: "text-gray-500 hover:text-gray-700",
  // Content area
  contentWrapper: "px-6 pb-6",
  // Sign-in header
  signInHeader: "mb-5",
  headingLarge: "text-2xl font-bold text-gray-900 mb-1",
  subheading: "text-gray-500 text-sm",
  // Form spacing
  formSpace: "space-y-4",
  // Label styles
  labelDefault: "block text-sm font-semibold text-gray-800 mb-1.5",
  labelSmall: "block text-xs font-semibold text-gray-700 mb-1.5",
  labelInline: "text-sm font-semibold text-gray-800",
  // Password row
  passwordRow: "flex justify-between items-center mb-1.5",
  // Forgot password link
  forgotLink: "text-sm font-semibold text-blue-600 hover:text-blue-700",
  // Sign-in button core (w/o bg)
  signInButtonCore: "w-full py-3 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2",
  signInButtonLoading: "bg-gray-700",
  signInButtonNormal: "bg-gray-900 hover:bg-black",
  // Register step 1
  regStep1Header: "mb-4",
  regStep1FormSpace: "space-y-3",
  regFieldGrid: "grid grid-cols-2 gap-3",
  // Register button (OTP send)
  regSendOtpBtn: "w-full py-3 text-white text-sm font-bold rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2",
  // Register step 2
  regStep2Header: "mb-4",
  timerBanner: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium mb-5",
  timerActiveBg: "bg-blue-50 text-blue-700",
  timerExpiredBg: "bg-red-50 text-red-600",
  regStep2Label: "block text-sm font-semibold text-gray-700 mb-1.5",
  backButton: "flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold rounded-xl text-sm",
  verifyButton: "flex-1 py-3 text-white font-semibold rounded-xl text-sm bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2",
  resendContainer: "text-center",
  resendText: "text-xs text-gray-500",
  resendBtnBase: "font-bold",
  resendBtnActive: "text-blue-600 hover:text-blue-700",
  resendBtnInactive: "text-gray-400",
  emailHighlight: "font-semibold text-blue-600",
  // AnimInput
  inputWrapperBase: "flex items-center gap-3 px-4 py-3 bg-white border rounded-xl transition-all duration-200",
  inputWrapperFocusedExtras: "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.15)]",
  inputWrapperUnfocusedExtras: "border-gray-200 shadow-sm shadow-black/5",
  iconBase: "shrink-0 transition-colors duration-200",
  iconFocused: "text-blue-500",
  iconUnfocused: "text-gray-400",
  inputField: "flex-1 text-sm font-medium text-gray-900 bg-transparent focus:outline-none placeholder:text-gray-400 caret-blue-500",
  togglePassword: "text-gray-400 hover:text-gray-600 transition-colors",
  // RippleButton
  rippleButtonBase: "relative overflow-hidden group",
  rippleButtonAfter: "after:absolute after:inset-0 after:-translate-x-full after:bg-linear-to-r after:from-transparent after:via-white/20 after:to-transparent after:skew-x-[-20deg] hover:after:translate-x-full after:transition-transform after:duration-700 after:ease-in-out",
  ripple: "absolute rounded-full bg-white/30 pointer-events-none animate-ping",
  // LoadingDots
  loadingContainer: "inline-flex items-center gap-1",
  loadingDot: "w-1.5 h-1.5 rounded-full bg-current animate-bounce inline-block",
  loadingDotDelay150: "delay-[150ms]",
  loadingDotDelay300: "delay-[300ms]",
};

export const adminAccountHistoryStyles = {
  // Loading
  loadingContainer: "flex items-center justify-center min-h-screen bg-white",
  spinner: "w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin",
  // Page wrapper
  pageWrapper: "p-6",
  // Back row
  backRow: "flex items-center gap-4 mb-6",
  backButton: "flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 font-medium transition-colors",
  pageTitle: "text-2xl font-bold text-gray-900",
  accountNumberLabel: "text-sm text-gray-500 font-mono mt-0.5",
  // Layout
  layoutGrid: "flex flex-col lg:flex-row gap-6 items-start",
  // Left sidebar
  leftSidebar: "w-full lg:w-72 flex-shrink-0 space-y-4",
  // Gradient card (base)
  gradientCardBase: "rounded-2xl p-5 text-white shadow-lg relative overflow-hidden",
  cardCircle: "absolute -top-6 -right-6 w-24 h-24 bg-white opacity-10 rounded-full",
  accountTypeTag: "text-[10px] font-bold uppercase tracking-widest opacity-80",
  accountNameLarge: "text-base font-bold mb-5",
  balanceLabel: "text-xs opacity-70 mb-1",
  balanceValue: "text-3xl font-bold mb-5",
  cardFooter: "flex justify-between items-center pt-3 border-t border-white/20",
  accountNumberText: "font-mono text-xs opacity-80",
  statusBadge: "text-xs bg-white/20 px-2 py-1 rounded-full font-semibold capitalize",
  // Details card
  detailsCard: "bg-white rounded-xl border border-gray-200 p-5",
  detailsTitle: "text-sm font-semibold text-gray-800 mb-4",
  detailsList: "space-y-2.5",
  detailsRow: "flex justify-between text-xs border-b border-gray-50 pb-2 last:border-0",
  detailsLabel: "text-gray-500",
  detailsValue: "font-semibold text-gray-800 capitalize",
  // Owner card
  ownerCard: "bg-white rounded-xl border border-gray-200 p-5 text-center",
  ownerAvatar: "w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-600 mx-auto mb-2 text-lg",
  ownerName: "text-sm font-bold text-gray-900",
  ownerEmail: "text-xs text-gray-400 mb-4",
  ownerDetailsContainer: "text-left space-y-3 pt-4 border-t border-gray-50",
  ownerDetailRow: "flex gap-2 text-xs items-center text-gray-600",
  ownerIcon: "text-gray-400 shrink-0",
  ownerValue: "truncate",
  // Stat cards
  statGrid: "grid grid-cols-2 md:grid-cols-4 gap-4",
  statCard: "bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between",
  statLabel: "text-xs text-gray-500 mb-1",
  statValue: "text-xl font-bold text-gray-900",
  statIconContainer: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
  // Transaction table container
  tableContainer: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden",
  tableHeaderRow: "p-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4",
  tableTitle: "text-sm font-bold text-gray-900",
  // Filter buttons
  filterButtonBase: "px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all",
  filterActive: "bg-gray-900 text-white border-gray-900",
  filterInactive: "bg-white text-gray-500 border-gray-200 hover:border-gray-300",
  // Export button
  exportButton: "flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg",
  // Table
  tableWrapper: "overflow-x-auto",
  table: "w-full text-sm text-left",
  thead: "bg-gray-50 text-xs text-gray-500 uppercase tracking-wide border-b",
  th: "px-4 py-3 font-semibold",
  tbody: "divide-y divide-gray-50",
  emptyRow: "py-16 text-center text-gray-400",
  // Transaction row
  tr: "hover:bg-gray-50 transition-colors",
  td: "px-4 py-3.5",
  // Transaction type badge
  typeBadgeBase: "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
  // Amount styling
  amountBase: "font-bold",
  // Other account
  otherAccount: "text-gray-500 font-medium font-mono text-xs",
  // Date
  date: "text-xs text-gray-400",
  // Status
  statusBase: "font-bold uppercase text-[10px]",
  // Ref id
  refId: "font-mono text-[10px] text-gray-400",
};

export const adminAccountsStyles = {
  // Page container
  pageContainer: "p-4 sm:p-6 max-w-7xl mx-auto min-w-0",
  // Header
  headerRow: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
  title: "text-xl sm:text-2xl font-bold text-gray-900",
  subtitle: "text-gray-500 text-xs sm:text-sm mt-0.5",
  addButton: "flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors",
  // Pending banner
  pendingBanner: "flex items-center justify-between gap-4 p-4 mb-6 bg-yellow-50 border border-yellow-200 rounded-xl",
  pendingIcon: "text-2xl",
  pendingBannerTitle: "text-sm font-semibold text-yellow-900",
  pendingBannerDesc: "text-xs text-yellow-700",
  reviewButton: "px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold rounded-lg transition-colors",
  // Tab bar
  tabBar: "flex flex-wrap gap-1 p-1 bg-gray-100 rounded-xl w-fit mb-6",
  tabButton: "px-5 py-2 rounded-lg text-xs font-semibold transition-all",
  tabActiveAll: "bg-white text-blue-600 shadow-sm",
  tabActivePending: "bg-yellow-500 text-white shadow-sm",
  tabInactive: "text-gray-500 hover:text-gray-700",
  // Badge dot on pending tab
  pendingBadge: "absolute -top-1.5 -right-1.5 w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs rounded-full border-2 border-gray-100",
  // Search bar
  searchContainer: "p-5 border-b border-gray-100",
  searchInputWrapper: "relative",
  searchIcon: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
  searchInput: "w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors",
  // Table
  table: "w-full text-sm",
  theadRow: "bg-gray-50 text-xs text-gray-500 uppercase tracking-wide border-b border-gray-100",
  thBase: "px-5 py-3 text-left font-semibold",
  thRight: "px-5 py-3 text-right font-semibold",
  tbody: "divide-y divide-gray-50",
  loadingRow: "py-16 text-center",
  spinner: "w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto",
  emptyRow: "py-16 text-center text-gray-400 text-sm",
  // Table rows and cells
  row: "hover:bg-gray-50 transition-colors",
  accountNumberCell: "px-5 py-3.5",
  accountNumberBadge: "font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded",
  nameCell: "px-5 py-3.5",
  name: "font-semibold text-gray-800 text-sm",
  email: "text-xs text-gray-400",
  typeCell: "px-5 py-3.5 capitalize text-sm text-gray-700",
  phoneCell: "px-5 py-3.5 text-xs text-gray-600",
  statusCell: "px-5 py-3.5",
  balanceCell: "px-5 py-3.5 font-semibold text-gray-800",
  dateCell: "px-5 py-3.5 text-xs text-gray-500",
  actionsCell: "px-5 py-3.5",
  actionsRow: "flex items-center justify-end gap-1",
  actionBtn: "p-2 rounded-lg transition-colors",
  viewBtn: "text-gray-400 hover:text-blue-600 hover:bg-blue-50",
  toggleActiveBtn: "text-gray-400 hover:text-yellow-600 hover:bg-yellow-50",
  toggleFrozenBtn: "text-gray-400 hover:text-green-600 hover:bg-green-50",
  deleteBtn: "text-gray-400 hover:text-red-600 hover:bg-red-50",
  // Pending empty state
  pendingEmptyCard: "bg-white rounded-xl border border-gray-200 p-16 text-center",
  pendingEmptyIcon: "text-5xl mb-4",
  pendingEmptyTitle: "text-lg font-semibold text-gray-800",
  pendingEmptyDesc: "text-sm text-gray-500 mt-1",
  // Pending cards grid
  pendingCardsGrid: "grid grid-cols-1 lg:grid-cols-2 gap-5",
  // Pending card
  pendingCard: "bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow",
  pendingCardHeader: "flex justify-between items-start mb-4",
  pendingAccountNumber: "font-mono text-xs font-bold text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded",
  pendingTypeTag: "text-xs font-semibold text-gray-500 capitalize bg-gray-100 px-2 py-0.5 rounded",
  pendingName: "text-base font-bold text-gray-900",
  pendingEmail: "text-xs text-gray-500 mt-0.5",
  pendingDepositLabel: "text-xs text-gray-500",
  pendingDepositValue: "text-lg font-bold text-green-600",
  pendingAddress: "text-xs text-gray-500 mb-4 flex items-center gap-1",
  pendingButtons: "flex gap-2 pt-3 border-t border-gray-100",
  pendingDetailsBtn: "flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg transition-colors",
  pendingRejectBtn: "flex-1 py-2 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold rounded-lg transition-colors",
  pendingApproveBtn: "flex-2 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-lg transition-colors",
  // Modal (reject & create)
  modalOverlay: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
  createModalOverlay: "fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/15 backdrop-blur-[2px]",
  modalContent: "bg-white rounded-2xl w-full max-w-md shadow-xl p-6",
  createModalContent: "bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-gray-200 overflow-y-auto max-h-[90vh]",
  modalTitle: "text-lg font-bold text-gray-900 mb-1",
  modalSubtitle: "text-sm text-gray-500 mb-5",
  modalInfoBox: "p-3 bg-gray-50 rounded-lg mb-4",
  modalInfoName: "text-sm font-semibold text-gray-800",
  modalInfoAccount: "text-xs text-gray-500 font-mono",
  // Form elements (create)
  label: "block text-xs font-medium text-gray-700 mb-1.5",
  requiredStar: "text-red-500",
  input: "w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500",
  select: "appearance-none cursor-pointer",
  textarea: "w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 transition-colors resize-none",
  formGrid: "grid grid-cols-2 gap-4",
  // Password toggle
  pwWrapper: "relative",
  pwInput: "w-full pl-3 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500",
  pwToggle: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
  pwHint: "text-xs text-gray-400 mt-1",
  // Create modal header
  createModalHeader: "p-6 border-b border-gray-100 flex items-center justify-between",
  closeBtn: "w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors text-lg",
  formBody: "p-6 space-y-4",
  // Buttons in modals
  cancelBtn: "flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold rounded-xl text-sm transition-colors",
  confirmRejectBtn: "flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-sm transition-colors",
  submitBtn: "w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors disabled:opacity-50 text-sm",
};

export const adminDashboardStyles = {
  // Loading
  loadingContainer: "flex items-center justify-center min-h-screen",
  spinner: "w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin",

  // Tooltip (shared)
  tooltipContainer: "bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs font-semibold",
  tooltipLabel: "text-gray-500 mb-1",
  tooltipName: "text-gray-800",
  tooltipValue: "text-blue-600",

  // Page
  pageContainer: "p-4 sm:p-6 max-w-7xl mx-auto min-w-0",
  headerMargin: "mb-5 sm:mb-6",
  title: "text-xl sm:text-2xl font-bold text-gray-900",
  subtitle: "text-gray-500 text-xs sm:text-sm mt-0.5",

  // Pending alert banner
  alertBanner: "flex items-center justify-between gap-3 p-4 mb-6 bg-yellow-50 border border-yellow-200 rounded-xl cursor-pointer hover:bg-yellow-100 transition-colors",
  alertBell: "text-yellow-500",
  alertTitle: "text-sm font-semibold text-yellow-900",
  alertText: "text-xs text-yellow-700",
  alertReview: "text-sm font-semibold text-yellow-900 shrink-0 flex items-center gap-1",

  // Stat cards
  statGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
  statCardBase: "bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow",
  statCardClickable: "cursor-pointer",
  statLabel: "text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1",
  statValueBase: "text-xl sm:text-2xl font-bold",
  statIconContainer: "w-11 h-11 rounded-xl flex items-center justify-center text-xl ml-3",
  statPendingText: "text-[10px] text-yellow-600 mt-0.5 font-medium flex items-center gap-0.5",

  // Charts
  chartsGrid: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",
  chartCard: "bg-white rounded-xl border border-gray-200 shadow-sm p-5",
  chartTitle: "text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4",
  chartEmpty: "h-64 flex items-center justify-center text-gray-400 text-sm",

  // Activity table
  tableCard: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden",
  tableHeader: "p-5 border-b border-gray-100",
  tableHeaderTitle: "text-sm font-semibold text-gray-700 uppercase tracking-wide",
  emptyActivity: "flex flex-col items-center justify-center py-12 text-gray-400 text-sm text-center",
  tableWrapper: "overflow-x-auto",
  table: "w-full text-sm",
  theadRow: "bg-gray-50 text-xs text-gray-500 uppercase tracking-wide",
  th: "px-5 py-3 text-left font-semibold",
  tbody: "divide-y divide-gray-100",
  row: "hover:bg-gray-50 transition-colors",
  tdBase: "px-5 py-3",
  tdId: "px-5 py-3 font-mono text-xs text-gray-600",
  typeBadgeBase: "px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-tight",
  tdAmount: "px-5 py-3 font-semibold",
  tdAccount: "px-5 py-3 font-mono text-xs text-gray-500",
  tdDate: "px-5 py-3 text-xs text-gray-500",
  statusBadgeBase: "px-2.5 py-0.5 rounded-full text-xs font-semibold",
};

export const adminLayoutStyles = {
  // Root
  root: "flex min-h-screen bg-gray-50",
  // Desktop sidebar
  desktopSidebar:
    "fixed top-0 left-0 h-full w-56 bg-gray-900 flex-col z-50 shadow-xl hidden lg:flex print:hidden",
  // Mobile overlay
  mobileOverlay: "fixed inset-0 z-50 lg:hidden",
  overlayBackdrop:
    "absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity duration-300",
  mobileSidebar:
    "relative w-56 h-full bg-gray-900 flex flex-col shadow-2xl animate-in slide-in-from-left duration-300",
  // Main wrapper
  mainWrapper:
    "flex-1 lg:ml-56 flex flex-col min-h-screen max-w-full overflow-x-hidden print:ml-0",
  // Header
  header:
    "h-16 bg-white border-b border-gray-200 flex items-center justify-between px-3 sm:px-6 sticky top-0 z-40 shadow-sm print:hidden",
  menuButton:
    "lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors",
  hiddenSpacer: "relative max-w-sm w-full hidden lg:block",
  rightGroup: "flex items-center gap-3 sm:gap-4",
  userInfoRow: "flex items-center gap-2 sm:gap-3",
  userTextContainer: "text-right hidden sm:block",
  userName: "text-sm font-semibold text-gray-800 leading-tight",
  userRole: "text-xs text-gray-500 font-medium",
  avatar: "w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-sm",
  mainContent: "flex-1 overflow-auto",

  // Sidebar inner
  brandSection: "p-5 border-b border-gray-800",
  brandIcon:
    "w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm",
  brandName: "text-white font-bold text-sm leading-none tracking-tight",
  brandSubtitle: "text-gray-400 text-xs mt-0.5 font-medium",
  nav: "flex-1 p-3 space-y-0.5 overflow-y-auto",
  navLinkBase:
    "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 group",
  navLinkActive:
    "bg-linear-to-r from-blue-600/20 to-blue-600/5 text-blue-400 shadow-[inset_3px_0_0_0_#3b82f6]",
  navLinkInactive: "text-gray-400 hover:bg-gray-800/50 hover:text-white",
  navIcon: "group-hover:scale-110 transition-transform shrink-0",
  profileSection: "p-3 border-t border-gray-800",
  profileFlex: "flex items-center gap-2.5",
  profileAvatar:
    "w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-bold shrink-0",
  profileTextWrapper: "flex-1 min-w-0",
  profileName: "text-white text-xs font-semibold truncate leading-tight",
  profileRole: "text-gray-400 text-xs font-medium",
  logoutBtn:
    "text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-800",
};

export const adminReportsStyles = {
  // Page
  pageContainer: "p-4 sm:p-6 min-w-0",
  headerMargin: "mb-6",
  title: "text-xl sm:text-2xl font-bold text-gray-900",
  subtitle: "text-gray-500 text-xs sm:text-sm mt-0.5",

  // Filter panel
  filterPanel: "bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-6",
  filterHeader: "flex items-center justify-between mb-5",
  filterHeaderIconRow: "flex items-center gap-2",
  filterHeaderIcon: "text-blue-500",
  filterHeaderTitle: "text-sm font-semibold text-gray-800",
  exportBtn: "flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg transition-colors",
  filterGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
  filterLabel: "block text-xs font-medium text-gray-600 mb-1.5",
  input: "w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors",
  select: "w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer",
  applyBtn: "px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors disabled:opacity-50",
  applyBtnRow: "mt-4 flex justify-end",

  // Stat cards
  statGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
  statCard: "bg-white rounded-xl border border-gray-200 p-5 flex items-center justify-between shadow-sm",
  statLabel: "text-xs font-medium text-gray-500 mb-1",
  statValueBase: "text-2xl font-bold",
  statIconContainer: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
  // Stat icon backgrounds & text colors
  statIconBgIndigo: "bg-indigo-50",
  statIconBgGreen: "bg-green-50",
  statIconBgRed: "bg-red-50",
  statIconBgYellow: "bg-yellow-50",
  statTextIndigo: "text-indigo-600",
  statTextGreen: "text-green-600",
  statTextRed: "text-red-500",
  statTextYellow: "text-yellow-600",

  // Chart
  chartCard: "bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-6",
  chartHeader: "flex items-center gap-2 mb-5",
  chartHeaderIcon: "text-blue-500",
  chartTitle: "text-sm font-semibold text-gray-800",
  chartContainer: "h-72",
  chartEmpty: "h-48 flex items-center justify-center bg-gray-50 rounded-xl text-gray-400 text-sm",

  // Table
  tableCard: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden",
  tableHeader: "px-6 py-4 border-b border-gray-100",
  tableHeaderTitle: "text-sm font-semibold text-gray-800",
  tableWrapper: "overflow-x-auto",
  table: "w-full text-sm",
  theadRow: "border-b border-gray-100",
  th: "px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider",
  tbody: "divide-y divide-gray-50",
  tableLoadingRow: "py-12 text-center",
  tableLoadingSpinner: "w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto",
  tableEmptyRow: "py-16 text-center text-gray-400 text-sm",
  tableRow: "hover:bg-gray-50 transition-colors",
  tdId: "px-6 py-3.5 font-mono text-xs text-gray-600",
  tdAccount: "px-6 py-3.5 font-mono text-xs font-semibold text-gray-700",
  tdCustomer: "px-6 py-3.5 text-sm font-semibold text-gray-800",
  tdType: "px-6 py-3.5",
  tdAmount: "px-6 py-3.5 font-bold text-gray-900",
  tdDate: "px-6 py-3.5 text-xs text-gray-500",
  tdDescription: "px-6 py-3.5 text-xs text-gray-500 max-w-xs truncate",
  typeBadgeBase: "px-2.5 py-0.5 rounded-full text-xs font-semibold",
  typeBadgeDeposit: "bg-green-100 text-green-700",
  typeBadgeWithdrawal: "bg-red-100 text-red-700",
  typeBadgeTransfer: "bg-yellow-100 text-yellow-700",
  typeBadgeDefault: "bg-gray-100 text-gray-700",

  // Chart tooltip
  chartTooltip: "bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs font-semibold",
  chartTooltipLabel: "text-gray-500 mb-1",
};

export const adminTransactionsStyles = {
  // Page
  pageContainer: "p-6",
  headerMargin: "mb-6",
  title: "text-2xl font-bold text-gray-900",
  subtitle: "text-gray-500 text-sm mt-0.5",
  // Form card
  formCard: "bg-white rounded-xl border border-gray-200 shadow-sm mb-6 overflow-hidden",
  tabsContainer: "flex border-b border-gray-200",
  tabButtonBase: "flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-colors border-b-2 -mb-px",
  tabActive: "text-gray-900 border-gray-900",
  tabInactive: "text-gray-400 border-transparent hover:text-gray-600",
  formBody: "p-6",
  formGrid: "grid grid-cols-2 gap-6 mb-5",
  label: "block text-sm font-semibold text-gray-700 mb-2",
  requiredStar: "text-red-500",
  input: "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-400",
  textarea: "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-gray-400",
  buttonsRow: "flex justify-end gap-3",
  cancelBtn: "px-6 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-lg transition-colors",
  submitBtnBase: "px-8 py-2.5 text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-50",
  submitBtnDeposit: "bg-green-600 hover:bg-green-700",
  submitBtnWithdraw: "bg-blue-600 hover:bg-blue-700",
  // Table
  tableCard: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden",
  tableHeader: "px-6 py-4 border-b border-gray-100 flex items-center justify-between",
  tableTitle: "text-sm font-bold text-gray-900",
  refreshBtn: "p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
  table: "w-full text-sm",
  theadRow: "border-b border-gray-100",
  th: "px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider",
  tbody: "divide-y divide-gray-50",
  tableLoadingRow: "py-16 text-center",
  loadingSpinner: "w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto",
  tableEmptyRow: "py-16 text-center text-gray-400 text-sm",
  tableRow: "hover:bg-gray-50 transition-colors",
  // Table cells
  tdBase: "px-6 py-3.5",
  tdTransactionId: "px-6 py-3.5 font-mono text-xs text-gray-500",
  tdAccount: "px-6 py-3.5 font-mono text-xs font-semibold text-gray-700",
  tdType: "px-6 py-3.5",
  tdAmount: "px-6 py-3.5",
  tdDate: "px-6 py-3.5 text-xs text-gray-500",
  tdDescription: "px-6 py-3.5 text-xs text-gray-500 max-w-xs truncate",
  // Type badges
  typeBadgeBase: "px-2.5 py-0.5 rounded-full text-xs font-semibold",
  typeBadgeDeposit: "bg-green-100 text-green-700",
  typeBadgeWithdrawal: "bg-red-100 text-red-700",
  typeBadgeTransfer: "bg-blue-100 text-blue-700",
  // Amount colors
  amountCredit: "text-green-600",
  amountDefault: "text-gray-800",
};

export const adminTransferFundsStyles = {
  // Page
  pageContainer: "p-6",
  header: "mb-6",
  title: "text-2xl font-bold text-gray-900",
  subtitle: "text-gray-500 text-sm mt-0.5",
  // Account cards grid
  accountCardsGrid: "grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 mb-6",
  // From card
  fromCard: "bg-orange-50 border border-orange-200 rounded-xl p-5",
  fromCardTitle: "text-xs font-bold text-orange-600 uppercase tracking-wider mb-3",
  labelSmall: "block text-xs font-medium text-gray-700 mb-1.5",
  inputWrapper: "relative",
  inputFrom: "w-full pl-3 pr-11 py-2.5 bg-white border border-orange-200 rounded-lg text-sm font-mono focus:outline-none focus:border-orange-400 transition-colors placeholder:text-gray-400",
  searchBtnContainer: "absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center justify-center cursor-pointer transition-colors",
  // Arrow
  arrowContainer: "flex justify-center py-2 md:py-0",
  arrowCircle: "w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md transform rotate-90 md:rotate-0",
  // To card
  toCard: "bg-green-50 border border-green-200 rounded-xl p-5",
  toCardTitle: "text-xs font-bold text-green-600 uppercase tracking-wider mb-3",
  inputTo: "w-full pl-3 pr-11 py-2.5 bg-white border border-green-200 rounded-lg text-sm font-mono focus:outline-none focus:border-green-400 transition-colors placeholder:text-gray-400",
  // Details
  detailsCard: "bg-white rounded-xl border border-gray-200 shadow-sm p-6",
  detailsTitle: "text-sm font-semibold text-gray-800 mb-5 pb-4 border-b border-gray-100",
  formSpace: "space-y-5",
  detailsGrid: "grid grid-cols-1 sm:grid-cols-2 gap-5",
  label: "block text-sm font-medium text-gray-700 mb-1.5",
  requiredStar: "text-red-500",
  amountWrapper: "relative",
  rupeeSymbol: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium",
  amountInput: "w-full pl-7 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-400",
  feeInput: "w-full pl-7 pr-4 py-2.5 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-500 cursor-not-allowed",
  feeHint: "text-xs text-gray-400 mt-1",
  remarksTextarea: "w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-gray-400",
  resultBoxBase: "p-4 rounded-xl flex items-center gap-3 text-sm font-semibold",
  resultBoxSuccess: "bg-green-50 text-green-700 border border-green-100",
  resultBoxError: "bg-red-50 text-red-700 border border-red-100",
  buttonsRow: "flex flex-col sm:flex-row justify-end gap-3 pt-2",
  resetBtn: "w-full sm:w-auto px-8 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl text-sm transition-colors",
  submitBtn: "w-full sm:w-auto px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-colors disabled:opacity-50",
};