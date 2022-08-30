import { ErrorDump } from '@/components/ErrorDump/ErrorDump'

export type FormStatus = {
  pending: boolean
  success: boolean
  error: Error | undefined
}

export const FormStatus: React.FC<{ formStatus: FormStatus }> = ({
  formStatus: { pending, success, error },
}) => {
  return (
    <>
      {pending && <Pending />} {success && <Success />}{' '}
      {error && <Error error={error} />}
    </>
  )
}

const Pending: React.FC = () => <p>pending...</p>

const Success: React.FC = () => <p>success!!!</p>

const Error: React.FC<{
  error: Error
}> = (props) => <ErrorDump error={props.error} />
