import { Trash } from 'phosphor-react';

export function Task() {
  return (
    <div className='flex items-start gap-3 p-4 bg-gray-500 rounded-lg border border-gray-400'>
      <input type="checkbox" className='rounded-3xl' />
      <p className='flex-1 text-sm leading-5'>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button>
        <Trash size={14} className='hover:text-danger' />
      </button>
    </div>

  );
}
