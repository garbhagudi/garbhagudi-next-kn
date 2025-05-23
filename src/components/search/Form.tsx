import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
const Form = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Last_Name: '',
      Phone: '',
      Email: '',
      Lead_Source: 'Online',
      Lead_Sub_Source: 'Garbhagudi_KN_Organic',
      UTM_Campaign: '',
    },
  });
  const [load, setLoad] = useState(false);

  const onSubmit = async (data) => {
    setLoad(true);
    try {
      const response = await fetch('/api/createLeads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setLoad(false);
      if (responseData?.data[0]?.code === 'SUCCESS') {
        router.push('/thank-you.html');
      }
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };
  return (
    <div className='bg-transparent h-auto rounded-lg w-full crmWebToEntityForm mx-auto py-8 zcwf_lblLeft'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col mx-auto px-3 space-y-5'>
          <div className='max-w-sm mx-auto'>
            <label
              htmlFor='Last_Name'
              className='flex justify-start items-center'
            >
              <span className='bg-gray-200 rounded-es-full rounded-ss-full text-left w-[9em] px-4 py-1'>
                Full Name
              </span>
              <input
                type='text'
                id='Last_Name'
                placeholder='Enter full name'
                {...register('Last_Name', {
                  required: 'Full Name is required',
                })}
                className='rounded-ee-full rounded-se-full text-base w-full active:outline-none focus:outline-none px-2 py-1'
              />
            </label>
            {errors.Last_Name && (
              <p className='text-red-500 text-sm absolute ml-[1.2em]'>
                {errors.Last_Name?.message}
              </p>
            )}
          </div>

          <div className='max-w-sm mx-auto'>
            <label htmlFor='Phone' className='flex justify-start items-center'>
              <span className='bg-gray-200 rounded-es-full rounded-ss-full text-left w-[9em] px-4 py-1'>
                Phone
              </span>
              <input
                type='text'
                id='Phone'
                placeholder='Enter phone number'
                {...register('Phone', {
                  required: 'Phone is required',
                  // pattern: {
                  //   value: /^[0-9]{10}$/, // Assuming a 10-digit phone number
                  //   message: 'Invalid phone number',
                  // },
                })}
                className='rounded-ee-full rounded-se-full text-base w-full active:outline-none focus:outline-none px-2 py-1'
              />
            </label>
            {errors.Phone && (
              <p className='text-red-500 text-sm absolute ml-[1.2em]'>
                {errors.Phone?.message}
              </p>
            )}
          </div>

          <div className='max-w-sm mx-auto'>
            <label htmlFor='Email' className='flex justify-start items-center'>
              <span className='bg-gray-200 rounded-es-full rounded-ss-full text-left w-[9em] px-4 py-1'>
                Email
              </span>
              <input
                type='email'
                id='Email'
                placeholder='Enter email'
                {...register('Email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email format',
                  },
                })}
                className='rounded-ee-full rounded-se-full text-base w-full active:outline-none focus:outline-none px-2 py-1'
              />
            </label>
            {errors.Email && (
              <p className='text-red-500 text-sm absolute ml-[1.2em]'>
                {errors.Email?.message}
              </p>
            )}
          </div>
        </div>
        <div className='flex justify-center items-center mb-6 mt-6 space-x-4'>
          <button
            type='submit'
            className='flex bg-brandPink justify-center rounded-md text-base text-white dark:bg-gg-500 dark:hover:bg-gg-600 font-bold gap-2 hover:bg-brandPink3 items-center px-6 py-2'
            disabled={load}
          >
            Submit
            {load && (
              <svg
                width={22}
                height={22}
                viewBox='0 0 38 38'
                xmlns='http://www.w3.org/2000/svg'
                stroke='#B2B2B2'
              >
                <g fill='none' fillRule='evenodd'>
                  <g transform='translate(1 1)' strokeWidth='2'>
                    <circle strokeOpacity='.5' cx='18' cy='18' r='18' />
                    <path d='M36 18c0-9.94-8.06-18-18-18'>
                      <animateTransform
                        attributeName='transform'
                        type='rotate'
                        from='0 18 18'
                        to='360 18 18'
                        dur='1s'
                        repeatCount='indefinite'
                      />
                    </path>
                  </g>
                </g>
              </svg>
            )}
          </button>

          <button
            type='button'
            onClick={() => {
              reset();
            }}
            className='bg-brandPink rounded-md text-base text-white dark:bg-gg-500 dark:hover:bg-gg-600 font-bold hover:bg-brandPink3 px-6 py-2'
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
