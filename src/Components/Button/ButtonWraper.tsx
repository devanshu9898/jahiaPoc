
import Button from './Button'
import { FiDownload } from "react-icons/fi";

export default function ButtonWraper() {
  return (
    <div className=' flex gap-4'>
      
      <Button variant="outline">
  Cancel
</Button>

<Button variant="primary">
  Delete
</Button>
<Button variant="danger" icon={<FiDownload />} iconPosition='right'>
  Download
</Button>
    </div>
  )
}
