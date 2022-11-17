import { formatDistance } from 'date-fns';
import { getLocationAddress } from './getLocationAddress';

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
  // В теорії тут у функцію я передаю дані з бекенду, але цифри які приходять, нажаль не валідні,
  // я провела тест і всі дані які приходили в різний час, в гугл пошуку видавали координати океанів,
  // тому країни і міста там у відповіді немає.
  // Для того щоб показати мій варіан обробки даних, я використала валідні координати.
  // const jobAddress = await getLocationAddress( location.lat , location.long );
  const jobAddress = await getLocationAddress();

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
