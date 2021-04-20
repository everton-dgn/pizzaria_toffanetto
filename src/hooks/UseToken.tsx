import Cookies from 'js-cookie'

export const useWriteToken = (name: string, value: string) => {
  // token expira em 1h
  const timeMinutesExpired = new Date(new Date().getTime() + 60 * 60 * 1000)

  return Cookies.set(name, value, {
    expires: timeMinutesExpired
  })
}

export const useReadToken = (name: string) => {
  const redirect = async () => {
    if (!Cookies.get(name)) {
      window.location.href = '/'
    }
  }
  redirect().then(r => r)
}

export const useRemoveAllTokens = () => {
  const listTokens = [
    'tokenPageStep2',
    'tokenPageStep3',
    'tokenPageStep4',
    'tokenPageSuccess',
    'tokenReturnHome'
  ]

  listTokens.forEach(el => Cookies.remove(el))
}
