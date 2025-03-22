import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export const UserAuthForm: React.FC = () => {
  return (
    <div>
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
            />
          </div>
          <Button
            type="submit"
            className={cn(buttonVariants)}
          >
            メールアドレスでログイン
          </Button>
        </div>
      </form>
    </div>
  );
};
