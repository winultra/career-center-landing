import type { DefaultCellComponentProps } from 'payload'

type PublishedCellProps = Pick<DefaultCellComponentProps, 'cellData'>

const PublishedCell = ({ cellData }: PublishedCellProps) => {
  return <span>{cellData ? 'Опубликовано' : 'Не опубликовано'}</span>
}

PublishedCell.displayName = 'PublishedCell'

export { PublishedCell }
export default PublishedCell
