import ExternalLink from '../atoms/external_link'

const Copyright = () => {
  return (
    <aside className="flex-1 whitespace-nowrap">
      <h2 className="mb-3">Copyright</h2>
      <p className="text-xs">
        &copy; 2022 shinonome
        <br />
        All Rights Reserved.
        <br />
        Released under the
        <br />
        <ExternalLink href="https://github.com/y-shinonome/langling/blob/main/LICENSE">
          MIT license
        </ExternalLink>
      </p>
    </aside>
  )
}

export default Copyright
