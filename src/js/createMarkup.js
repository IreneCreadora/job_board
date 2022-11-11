export function createMarkup({
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
  // const time = date.toISOString(createdAt);

  return `<li class="job__item" data-id="${id}">
      <img src="${pictures[0]}" alt="${name}" class="picture" loading="lazy">
      <div class="job__info">
      <h2 class="job__title">${title}
      </h2>
      <p class="job__company">${name}
      </p>
      <p class="job__address"><i style='font-size:18px' class='fas'>&#xf3c5;</i>${address}
      </p>
      </div>
      <p class="job__time">${createdAt}
      </p>
  </li>`;
}
