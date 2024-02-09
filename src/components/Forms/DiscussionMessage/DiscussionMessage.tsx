/** @format */

import { extensions, useEditor } from "@tiptap/react";
import { RichTextEditor, Link } from "@mantine/tiptap";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import "@mantine/tiptap/styles.css";
import { useForm } from "react-hook-form";
import { Input } from "@mantine/core";

export function DiscussionMessageForm() {
  const content = "<p>جواب خودتون اینجا بنویسید</p>";

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const handleSubmitMessage = async (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitMessage)}>
      <Input.Wrapper
              error={errors.message?.message}
              {...register("message" , {
                minLength : 3
              })}
      >
        <RichTextEditor
          editor={editor}
          mih={"300"}
          // placeholder={t("titlePlace")}

          >
          <RichTextEditor.Toolbar sticky stickyOffset={60}>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Underline />
              <RichTextEditor.Strikethrough />
              <RichTextEditor.ClearFormatting />
              <RichTextEditor.Highlight />
              <RichTextEditor.Code />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.H1 />
              <RichTextEditor.H2 />
              <RichTextEditor.H3 />
              <RichTextEditor.H4 />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Blockquote />
              <RichTextEditor.Hr />
              <RichTextEditor.BulletList />
              <RichTextEditor.OrderedList />
              <RichTextEditor.Subscript />
              <RichTextEditor.Superscript />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Link />
              <RichTextEditor.Unlink />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.AlignLeft />
              <RichTextEditor.AlignCenter />
              <RichTextEditor.AlignJustify />
              <RichTextEditor.AlignRight />
            </RichTextEditor.ControlsGroup>
          </RichTextEditor.Toolbar>

          <RichTextEditor.Content />
        </RichTextEditor>
      </Input.Wrapper>

      <button>ssssssssssss</button>
    </form>
  );
}
