"use client";

import React from "react";
import { type Post, Visibility } from "@prisma/client";
import BackButton from "./back-button";
import { Loader2Icon, SettingsIcon, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

type PropsType = {
  post: Post;
};

export default function BlogPostForm({ post }: PropsType) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(post.title);
  const [description, setDescription] = React.useState(post.description);
  const [content, setContent] = React.useState(post.content);
  const [visibility, setVisibility] = React.useState<Visibility>(
    post.visibility
  );

  const handleSaveSettingsIcon = () => {};

  return (
    <>
      <div className=" flex items-center justify-between">
        <BackButton />
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              className="px-2.5 border-solid rounded-[6px] border-zinc-900 hover:bg-zinc-900 hover:border-[1px]"
            >
              <SettingsIcon size={20} />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className=" border-zinc-900 rounded-[6px] ">
            <div className=" flex items-center justify-between">
              <div className="mb-1.5 text-sm font-medium leading-none">
                Visibility
              </div>
              <AlertDialogCancel className="border-none hover:bg-zinc-950 rounded-[6px]">
                {" "}
                <X size={16} />
              </AlertDialogCancel>
            </div>
            <Select
              value={visibility}
              onValueChange={(value) => setVisibility(value as Visibility)}
            >
              <SelectTrigger className=" md:w-1/2 rounded-[6px] hover:bg-zinc-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className=" rounded-[6px] border-zinc-900">
                <SelectItem value={Visibility.PUBLIC}>Public</SelectItem>
                <SelectItem value={Visibility.PRIVATE}>Private</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex justify-end">
              <Button
                className=" rounded-[6px] bg-zinc-900"
                onClick={handleSaveSettingsIcon}
              >
                Save
              </Button>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div className="my-8 space-y-6">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input
            className="mt-2 rounded-[6px] border-zinc-900 focus:border-zinc-900 focus:border-[4px]"
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="title">Description</Label>
          <Textarea
            className="rounded-[6px] border-zinc-900 mt-2 focus:border-zinc-90 resize-none"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
            value={description ?? undefined}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Textarea
            className="rounded-[6px] border-zinc-900 mt-2 focus:border-zinc-90 resize-none "
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
            value={description ?? undefined}
          />
        </div>
      </div>
    </>
  );
}
