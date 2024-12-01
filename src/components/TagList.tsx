import { useState } from "react";
import TagButton from "./TagButton";

interface ITagListProps<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}

export default function TagList<T extends string>({
  tagList,
  onTagClick,
}: ITagListProps<T>) {
  const [selectedTag, setSelectedTag] = useState(tagList[0]);
  return (
    <div
      className="flex gap-x-4"
      onClick={(event) => {
        const eventTarget = event.target as HTMLElement;
        const tag = eventTarget.textContent as T;
        if (tag) {
          onTagClick(tag);
        }
      }}
    >
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          isChecked={selectedTag === tag}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
}
