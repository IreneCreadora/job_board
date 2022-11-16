import { formatDistance, subDays } from 'date-fns';
import { locationRequest } from './getLocationAddress';

export async function createMarkup({
  id,
  name,
  email,
  phone,
  title,
  salary,
  address,
  benefits,
  location,
  pictures,
  createdAt,
  updatedAt,
  description,
  employment_type,
}) {
  const postedTime = formatDistance(new Date(createdAt), Date.now(), {
    addSuffix: true,
  });

  const locationAddress = await locationRequest.getAddress(
    50.450001,
    30.523333
  );
  const jobAddress = locationAddress[0].formatted_address;

  return `<li class="job__item" data-id="${id}">
      <img src="${pictures[0]}" alt="${name}" class="picture" loading="lazy">
      <div class="job__info">
      <a
  href="./job-details.html"
  target="_self"
  rel="noopener noreferrer"
  title="Job details"
  class="job__title"
>
${title}
</a>
      <p class="job__company">${name}
      </p>
      <p class="job__address"><i class="fa-solid fa-location-dot"></i>${jobAddress}
      </p>
      </div>
      <p class="job__time">Posted ${postedTime}
      </p>
  </li>`;
}
