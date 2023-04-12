export const formatDate = (date: string) => {
  const formattedDate = new Date(date).toISOString().slice(0, 10).replace(/-/g, '/')
  return formattedDate
}
