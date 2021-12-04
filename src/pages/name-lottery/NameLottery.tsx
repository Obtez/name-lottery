import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import Form from "../../components/form/Form"
import NameList from "../../components/name-list/NameList"
import { getRandomName } from "./nameLotteryHelper"

interface IError {
  isError: boolean;
  message: string;
}

const emptyError = {isError: false, message: ""}

const NameLottery = () => {
  const [names, setNames] = useState<string[]>([])
  const [chosenName, setChosenName] = useState<string>("")
  const [prevChosenNames, setPrevChosenNames] = useState<string[]>([])
  const [isOnlyUnique, setIsOnlyUnique] = useState<boolean>(false)
  const [showError, setShowError] = useState<IError> (emptyError)
  
  // useEffect(() => {
  //   const namesInStorage = localStorage.getItem("names")
  //   if (namesInStorage) {
  //     setNames(JSON.parse(namesInStorage))
  //   }
  // }, [])

  // const saveNamesToLocalStorage = () => {
  //   localStorage.setItem("names", JSON.stringify(names))
  // }

  const handleClick = () => {
    if (names.length === 0) {
      setShowError({
        ...showError,
        isError: true,
        message: "No names added yet."
      })
    }

    if (names.length > 0) {
      setShowError(emptyError)

      if (isOnlyUnique) {
        // do this one
      }

      const name = getRandomName(names)
      setChosenName(name)
    } else {
      return null
    }
  }

  const addName = (name: string) => {
    const sanitizedName = name.trim()
    if (sanitizedName.length === 0) return null

    setNames([...names, sanitizedName])
  }

  const clearName = () => {
    setChosenName("")
  }

  return (
    <div>
      <h1>Name Lottery</h1>
      <Form addName={addName} />
      <NameList names={names} />
      <p>OR choose a group</p>
      <button type="button" onClick={handleClick}>Start Lottery</button>
      <button type="button" onClick={clearName}>Clear</button>
      {showError.isError && <p>{ showError.message} </p>}
      <p>{chosenName}</p>
      <input type="checkbox" onChange={() => setIsOnlyUnique(!isOnlyUnique)} checked={isOnlyUnique} />
    </div>
  )
}

export default NameLottery