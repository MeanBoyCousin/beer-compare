const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    return /iphone|ipad|ipod/.test(userAgent)
}

const isInStandaloneMode = () =>
    'standalone' in window.navigator && window.navigator.standalone

export { isIos, isInStandaloneMode }
