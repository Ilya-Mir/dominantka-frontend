import { useState } from 'react'
import { CheckboxWrapper, CheckboxOuter, CheckboxInner, Label } from './CustomCheckboxStyles'

interface CustomCheckboxProps {
  label: string
  isChecked?: boolean
  onChange: (checked: boolean) => void
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, isChecked = false, onChange }) => {
  const [checked, setChecked] = useState(isChecked)

  const handleToggle = () => {
    setChecked(!checked)
    onChange(!checked)
  }

  return (
    <CheckboxWrapper onClick={handleToggle}>
      <CheckboxOuter style={{ backgroundColor: checked ? 'blue' : 'transparent' }}>
        {checked && <CheckboxInner />}
      </CheckboxOuter>
      <Label>{label}</Label>
    </CheckboxWrapper>
  )
}

export default CustomCheckbox
