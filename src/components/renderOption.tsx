import { SelectedOptions } from "../App";
import { FrameworkOption } from "../lib/Frameworks";
import { Label } from "./ui/label";

import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";

export const renderOption = (
  selectedOptions: SelectedOptions,
  handleOptionChange: (optionId: string, value: string | boolean) => void,
  option: FrameworkOption
) => {
  const value = selectedOptions[option.id] ?? option.defaultValue;

  switch (option.type) {
    case "checkbox":
      return (
        <div className="flex items-center space-x-2">
          <Checkbox
            id={option.id}
            checked={value as boolean}
            onCheckedChange={(checked) =>
              handleOptionChange(option.id, checked as boolean)
            }
          />
          <Label htmlFor={option.id}>{option.label}</Label>
        </div>
      );
    case "input":
      return (
        <>
          <Label htmlFor={option.id}>{option.label}</Label>
          <Input
            id={option.id}
            type="text"
            placeholder={option.placeholder}
            value={value as string}
            onChange={(e) => handleOptionChange(option.id, e.target.value)}
          />
        </>
      );
    case "select":
      return (
        <>
          <Label htmlFor={option.id}>{option.label}</Label>
          <Select
            value={value as string}
            onValueChange={(newValue) =>
              handleOptionChange(option.id, newValue)
            }
          >
            <SelectTrigger id={option.id}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {option.options?.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </>
      );
    default:
      return null;
  }
};
