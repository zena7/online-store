import clsx from 'clsx';

export const MinusIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={clsx(className && className)}
      // style="enable-background:new 0 0 512 512;"
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z" />
    </svg>
  );
};
