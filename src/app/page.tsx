"use client"
import { useFormState } from 'react-dom';
import { dateAction } from '@/actions';

export default function Home() {
  let [state, formAction] = useFormState(dateAction, "");

  let options = [
    { label: "Years", value: "years" },
    { label: "Months", value: "months" },
    { label: "Weeks", value: "weeks" },
    { label: "Days", value: "days" },
    { label: "Hours", value: "hours" },
    { label: "Minutes", value: "minutes" },
    { label: "Seconds", value: "seconds" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutral-900 text-neutral-400">
      <form action={formAction} className='flex flex-col space-y-4'>
        <p>Last</p>
        <input type="number" name="number" />
        <select name="unit" >
          {
            options.map((option) => (
              <option key={option.value}>{option.label}</option>
            ))
          }
        </select>

        <button type="submit">Submit</button>
      </form>

      <code>[From {state?.from}] - [To {state?.to}]</code>
    </main>
  );
}
