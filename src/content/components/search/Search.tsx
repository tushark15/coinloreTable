import { Input } from 'antd'

interface SearchProps {
  sendSearch: (data:string) => void;
}

const Search = ({sendSearch}: SearchProps) => {
  const handleSeachInput = (e:any) => {
    sendSearch(e.target.value);
  }
  
  return (
    <div className="w-50 d-flex">
      <Input type="text" placeholder="Search..." onChange={handleSeachInput} />
    </div>
  )
}

export default Search