import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Moon } from 'lucide-react';

export const Display = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Display & Theme</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">Dark mode</h4>
              <p className="text-xs text-muted-foreground">Toggle dark appearance.</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">Accent</h4>
              <p className="text-xs text-muted-foreground">Pick a primary color.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost">
                Indigo
              </Button>
              <Button size="sm" variant="ghost">
                Rose
              </Button>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <Label>Preview</Label>
          <div className="mt-2 p-4 rounded-lg border dark:border-slate-700 bg-gradient-to-br from-white/60 dark:from-slate-800/60">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Preview your theme</h3>
                <p className="text-xs text-muted-foreground">Small live preview of chosen appearance.</p>
              </div>
              <div className="inline-flex items-center gap-3">
                <div className="text-sm">
                  <Moon size={16} />
                </div>
                <div className="w-10 h-10 rounded-md bg-gradient-to-r from-indigo-400 to-pink-400" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
