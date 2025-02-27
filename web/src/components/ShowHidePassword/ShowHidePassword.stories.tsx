// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import ShowHidePassword from './ShowHidePassword'
import {Form} from "@redwoodjs/forms";

const meta: Meta<typeof ShowHidePassword> = {
  component: ShowHidePassword,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ShowHidePassword>

export const Primary: Story = {
  render: ()=>(
    <Form><ShowHidePassword label={"Password"} name={"password"}/></Form>
  )
}
