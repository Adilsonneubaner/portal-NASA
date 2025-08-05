import './Pagination.css'

const Pagination = ({limit, total, offset, setOffset}) => {

    const max_buttons = 7
    const max_left = (max_buttons - 1) / 2

    const current = offset === 0 ? 1 : (offset / limit) + 1 
    const pages = Math.ceil(total / limit) 
    const max_first = Math.max(pages - (max_buttons - 1), 1)
    const first_page = Math.min(
      Math.max(current - max_left, 1),
      max_first
    )

    const handleClickButton = (page) => {
      setOffset((page - 1) * limit)

      window.scrollTo({
        top: 800,
        behavior: 'smooth'
      })
    }

  return (
    <ul className='container-pagination'>
      {Array.from({length: Math.min(max_buttons, pages)})
        .map((_, index) => index + first_page)
        .map((page) => (
          <li key={page}>
            <button onClick={() => handleClickButton(page)} className={page === current? 'button-current' : 'button-pagination'}>{page}</button>
          </li>
        ))
      }
    </ul>
  )
}

export default Pagination