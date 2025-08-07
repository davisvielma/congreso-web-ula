export const scrollTo = (section: string) => {
  document.getElementById(section)?.scrollIntoView({
    behavior: "smooth",
  })
}