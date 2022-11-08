import { ErrorMessage, Field } from 'formik'

type Props = {
  label: string
  name: string
  disabled: boolean
  isSubmitting: boolean
  hideLabel?: boolean
}

export const UseFormField = ({
  label,
  name,
  disabled,
  isSubmitting,
  hideLabel = false,
}: Props) => {
  return (
    <div className="flex flex-col">
      {!hideLabel && (
        <label
          htmlFor={name}
          className="text-label-gray text-[0.875rem] font-medium leading-[1.25rem] mb-2"
        >
          {label}
        </label>
      )}
      <Field name={name}>
        {({ field, meta }: any) => (
          <div>
            <input
              {...field}
              disabled={disabled || isSubmitting}
              placeholder={label}
              className="border border-input-border rounded-md w-full bg-white py-[0.813rem] px-[1.969rem] disabled:bg-gray-200 disabled:text-gray-600"
            />
            {meta.touched && meta.error && (
              <div className="text-red-400 text-[0.8rem] font-medium leading-[1.25rem] mt-2">
                {meta.error}
              </div>
            )}
          </div>
        )}
      </Field>
    </div>
  )
}
