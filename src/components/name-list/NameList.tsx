interface IProps {
  names: string[]
}

const NameList = ({names}: IProps) => {
  return (
    <ul>
      {
        names.length > 0 ? (
          names.map(n => <p>{n}</p>)
        ) : (
            <p>No names added yet.</p>
        )
      }
    </ul>
  )
}

export default NameList