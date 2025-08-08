interface Props {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
}

const Metadata = ({
  title = 'Título por defecto',
  description = 'Descripción por defecto',
  keywords = [],
  ogImage = '/vite.svg',
}: Props) => {
  return (
    <>
      <title>{title}</title>
      {ogImage && <link rel="icon" type="image/svg+xml" href={ogImage} />}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
    </>
  )
}

export default Metadata
