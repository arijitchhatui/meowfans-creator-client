import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ThemeCode, useDarkMode } from '@/hooks/useDarkMode';

export function ApplyTheme() {
  const { theme, setTheme } = useDarkMode();
  return (
    <Select value={theme} onValueChange={(value: ThemeCode) => setTheme(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Themes</SelectLabel>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
