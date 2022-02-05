/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

const Event = ({ event }) => {
  return (
    <div className="Event rounded bg-slate-200 p-3">
      <h1 className="font-bold">{event.date}</h1>
      <p>{event.location}</p>
      <div className="columns-2">
        <div>
          <a href={event.form} className="bg-sky-600 rounded p-2">
            Register
          </a>
        </div>
        <div>
          <a href={event.view} className="bg-green-600 rounded p-2">
            See who's going
          </a>
        </div>
      </div>
    </div>
  );
};

export default Event;
