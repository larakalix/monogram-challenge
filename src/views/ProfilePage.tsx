import { Form, Formik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import { ViewWrappperColSplitType } from 'types/generic/generic'
import { FormField } from 'types/data/formField'
import { userValidationSchema } from '@validationSchemas/profileValidationSchema'
import { ViewContentWrapper, UseFormField } from '@components/generic'
import { useUserStore } from '@store/userStore'
import { GenericUserProps } from 'types/data/user'
import { useProfile } from '@hooks/profile/useProfile'

const initialValues: Omit<GenericUserProps, 'id'> = {
  name: '',
  lastname: '',
  username: '',
  email: '',
}

const formFields: FormField[] = [
  { label: 'First Name', name: 'name', disabled: false },
  { label: 'Last Name', name: 'lastname', disabled: false },
  { label: 'Your handle (username)', name: 'username', disabled: true },
  { label: 'Email address', name: 'email', disabled: false },
]

export const ProfilePage = () => {
  const { user, followings, setUser } = useUserStore((state) => state)
  const { submit } = useProfile(user!)

  if (!user) return null

  const values: Omit<GenericUserProps, 'id'> = user

  return (
    <ViewContentWrapper
      title="Your profile"
      splitType={ViewWrappperColSplitType.NotEquals}
    >
      <Toaster />
      <Formik
        enableReinitialize
        validationSchema={userValidationSchema}
        initialValues={values || initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false)

          submit(values).then((res) => {
            if (res.ok) {
              toast.success('Profile updated', {
                icon: '👏',
              })

              setUser(
                {
                  ...user,
                  ...values,
                },
                followings
              )
            } else toast.error('Something went wrong')
          })
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
            {formFields.map(({ label, name, disabled }) => (
              <UseFormField
                key={`field_${name}`}
                label={label}
                name={name}
                disabled={disabled}
                isSubmitting={isSubmitting}
              />
            ))}

            <button
              disabled={isSubmitting}
              className="bg-primary-button text-white rounded-md py-[0.813rem] px-[1.969rem]"
              type="submit"
            >
              Update info
            </button>
          </Form>
        )}
      </Formik>
    </ViewContentWrapper>
  )
}
