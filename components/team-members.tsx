import { ChevronDownIcon } from "@radix-ui/react-icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DemoTeamMembers() {

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/01.png" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">m@example.com</p>
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Owner{" "}
                <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="end">
              <div className="py-2 bg-white border border-gray-200 rounded shadow-md">
                <div className="px-4 py-2">
                  <p className="font-semibold">Panel Position</p>
                </div>
                <div className="border-t border-gray-200">
                  <div className="p-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-primary-500"
                        name="panelPosition"
                        value="top"
                      />
                      <span className="ml-2">Top</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio text-primary-500"
                        name="panelPosition"
                        value="bottom"
                      />
                      <span className="ml-2">Bottom</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio text-primary-500"
                        name="panelPosition"
                        value="right"
                      />
                      <span className="ml-2">Right</span>
                    </label>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

        </div>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/02.png" />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">Jackson Lee</p>
              <p className="text-sm text-muted-foreground">p@example.com</p>
            </div>
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Member{" "}
                <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="end">
              <div className="py-2 bg-white border border-gray-200 rounded shadow-md">
                <div className="px-4 py-2">
                  <p className="font-semibold">Panel Position</p>
                </div>
                <div className="border-t border-gray-200">
                  <div className="p-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-primary-500"
                        name="panelPosition"
                        value="top"
                      />
                      <span className="ml-2">Top</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio text-primary-500"
                        name="panelPosition"
                        value="bottom"
                      />
                      <span className="ml-2">Bottom</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio text-primary-500"
                        name="panelPosition"
                        value="right"
                      />
                      <span className="ml-2">Right</span>
                    </label>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

        </div>
      </CardContent>
    </Card>
  )
}
