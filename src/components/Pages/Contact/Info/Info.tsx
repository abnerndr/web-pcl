import Link from 'next/link';

export default function Info() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
        <div className='divide-y-2 divide-gray-200'>
          <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
            <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight'>
              Fale Conosco
            </h2>
            <div className='mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0'>
              <div>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>Endereço</h3>
                <dl className='mt-2 text-base text-gray-500'>
                  <div>
                    <dt className='sr-only'>Rua</dt>
                    <dd>
                      Rua João Cassimiro, 250
                      <br />
                      <span className='font-semibold'>Gov. Mario Covas</span>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>cidade</dt>
                    <dd>
                      Guariba - SP, <span className='font-semibold'>14840-000</span>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  Contato - Oséias
                </h3>
                <dl className='mt-2 text-base text-gray-500'>
                  <div>
                    <dt className='sr-only'>email</dt>
                    <dd>
                      <Link href='mailto:oseias@pontocertolocacoes.com.br'>
                        <a>oseias@pontocertolocacoes.com.br</a>
                      </Link>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>
                      <Link href='tel:+5516991457063'>
                        <a>+55 (16) 99145-7063</a>
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  Contato - Rogério
                </h3>
                <dl className='mt-2 text-base text-gray-500'>
                  <div>
                    <dt className='sr-only'>email</dt>
                    <dd>
                      <Link href='mailto:rogerio@pontocertolocacoes.com.br'>
                        <a>rogerio@pontocertolocacoes.com.br</a>
                      </Link>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>
                      <Link href='tel:+5516996188384'>
                        <a>+55 (16) 99618-8384</a>
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>Contato</h3>
                <dl className='mt-2 text-base text-gray-500'>
                  <div>
                    <dt className='sr-only'>email</dt>
                    <dd>
                      <Link href='mailto:contato@pontocertolocacoes.com.br'>
                        <a>contato@pontocertolocacoes.com.br</a>
                      </Link>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>
                      <Link href='tel:+5516996188384'>
                        <a>+55 (16) 99618-8384</a>
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className='mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8'>
            <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight'>
              Localização
            </h2>
            <div className='flex justify-center col-span-12'>
              <div className='flex flex-row w-full justify-between'>
                <iframe
                  src='https://maps.google.com/maps?q=Rua%20j%C3%B5ao%20cassimiro,%20250&t=&z=17&ie=UTF8&iwloc=&output=embed'
                  width='720'
                  height='450'
                  frameBorder='0'
                  style={{ border: 0 }}
                  aria-hidden='false'
                  className='w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
