import ExternalLink from '../atoms/external_link'

const Copyright = () => {
  return (
    <aside className="mr-[10vw] mb-6 mt-3">
      <h2 className="mb-3 font-medium">Copyright</h2>
      <p className="text-sm">
        &copy; 2022 shinonome
        <br />
        All Rights Reserved.
        <br />
        Released under the{' '}
        <ExternalLink href="https://github.com/y-shinonome/langling/blob/main/LICENSE">
          MIT license
        </ExternalLink>
      </p>
    </aside>
  )
}

export default Copyright
