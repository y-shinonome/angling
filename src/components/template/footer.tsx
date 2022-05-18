import Copyright from '../footer/copyright'
import Social from '../footer/social'
import Links from '../footer/links'

const Footer = () => {
  return (
    <div className="mt-20 mb-10 border-t-[1px] border-teal-200">
      <footer className="mx-auto flex w-full max-w-[600px] flex-wrap justify-between gap-x-16 gap-y-16 px-3 pt-5">
        <Copyright />
        <Social />
        <Links />
      </footer>
    </div>
  )
}

export default Footer
