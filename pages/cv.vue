<template>
  <UContainer class="page-content p-0 sm:p-0 lg:p-0 h-screen flex bg-[#1A202C]">
    <UCard class="w-full h-full bg-[#1A202C]">
      <template #header>
        <div class="btn-wrapper mt-[25px]">
          <ul class="button-list flex gap-2 items-center">
            <li class="button-item">
              <UButton
                class="button-item-btn cursor-pointer"
                icon="material-symbols:print-sharp"
                size="xl"
                variant="solid"
                color="neutral"
              />
            </li>
            <li class="button-item">
              <UButton
                class="button-item-btn cursor-pointer"
                label="PDF"
                size="xl"
                variant="solid"
                color="neutral"
              />
            </li>
            <li class="button-item">
              <UButton
                class="button-item-btn cursor-pointer"
                label="DOC"
                size="xl"
                variant="solid"
                color="neutral"
              />
            </li>
            <li class="button-item">
              <UButton
                class="button-item-btn cursor-pointer"
                icon="clarity:contract-line"
                size="xl"
                variant="solid"
                color="neutral"
              />
            </li>
            <li class="button-item">
              <UButton
                class="button-item-btn cursor-pointer"
                icon="mdi:trash"
                size="xl"
                variant="solid"
                color="neutral"
              />
            </li>
            <li class="button-item">
              <UButton
                class="button-item-btn cursor-pointer"
                icon="mdi:receipt-text-send"
                size="xl"
                variant="solid"
                color="neutral"
              />
            </li>
            <li class="button-item">
              <UButton
                class="button-item-btn cursor-pointer"
                icon="mdi:favourite"
                size="xl"
                variant="solid"
                color="neutral"
              />
            </li>
          </ul>
        </div>
      </template>
      <div class="card-content flex items-start">
        <div
          class="avatar-wrapper w-[200px] h-[200px] bg-[#f2f2f2] flex items-center justify-center mr-4"
        >
          <UAvatar
            class="w-[195px] h-[195px]"
            :src="candidateClaimAvatar"
            size="xl"
          />
        </div>
        <div class="card-info flex flex-col gap-1 mr-2">
          <h2
            class="user-name text-lg mb-3 font-semibold text-xl flex items-center"
          >
            {{ candidateName }}
            <UIcon
              name="mdi:file-send-outline"
              class="size-5 social-icon mr-1 text-[#000] ml-1 text-[18px]"
            />
          </h2>
          <div class="user-vacancy-name text-md">
            Кандидат на вакансию:
            <a href="" class="vacancy-link text-de text-[#0D58E5]"
              >Жадный благотворитель
              <UIcon
                name="mdi:file-send-outline"
                size="xl"
                class="size-5 social-icon mr-1 text-[#000] text-[18px]"
              />
              ({{ candidateClaimDate }} Отлик)</a
            >
          </div>
          <p class="user-claim-status text-md">{{ candidateClaimStatus }}</p>
          <p class="user-age">{{ candidateAge }}</p>
          <div class="user-phone-number-wrapper flex items-center">
            <div class="user-phone-number flex items-center mr-4">
              <UIcon
                name="fa-solid:phone-alt"
                class="size-5 social-icon mr-1 text-[#FFB126]"
              /><a
                :href="`tel:${candidatePhoneNumber}`"
                class="phone-link text-md"
                >{{ candidatePhoneNumber }}</a
              >
            </div>
            <div class="user-socials flex items-center">
              <a
                href="https://web.telegram.org/"
                class="user-socials-link flex mr-1 bg-[#28BA0A] p-1 rounded ease-out duration-300 border-1 border-[transparent] hover:bg-[transparent] hover:text-[#fff] hover:border-[#28BA0A]"
              >
                <UIcon name="logos:whatsapp-icon" class="size-5 social-icon" />
              </a>
              <a
                href="https://www.whatsapp.com/"
                class="user-socials-link flex mr-1 bg-[#8051A1] p-1 rounded ease-out duration-300 border-1 border-[transparent] hover:bg-[transparent] hover:text-[#8051A1] hover:border-[#8051A1]"
              >
                <UIcon
                  name="basil:viber-outline"
                  class="size-5 social-icon text-[#fff]"
                />
              </a>
              <a
                href="https://www.viber.com/ru/"
                class="user-socials-link flex mr-1 bg-[#28B6FC] p-1 rounded ease-out duration-300 border-1 border-[transparent] hover:bg-[transparent] hover:text-[#28B6FC] hover:border-[#28B6FC]"
              >
                <UIcon
                  name="mdi:telegram"
                  class="size-5 social-icon text-[#fff]"
                />
              </a>
            </div>
          </div>
          <p class="user-email flex items-center">
            <UIcon
              name="material-symbols:mail"
              class="size-5 social-icon mr-1 text-[#FFB126]"
            /><a :href="`mailto:${candidateEmail}`" class="text-md">{{
              candidateEmail
            }}</a>
          </p>
        </div>
      </div>
      <template #footer>
        <div class="footer-wrapper">
          <div class="user-events mb-3">
            <h2 class="user-event-title font-semibold mb-2">Дела:</h2>
            <ul class="user-event-list flex flex-row gap-2">
              <li class="user-event-item">
                <UButton
                  class="user-event-item-btn cursor-pointer"
                  size="xl"
                  label="Собеседование Запланировано"
                  variant="outline"
                  color="success"
                />
              </li>
              <li class="user-event-item">
                <UButton
                  class="user-event-item-btn cursor-pointer"
                  size="xl"
                  label="Создать видеозвонок"
                  variant="outline"
                  color="success"
                />
              </li>
              <li class="user-event-item">
                <UButton
                  class="user-event-item-btn cursor-pointer"
                  size="xl"
                  label="Запланировать событие"
                  variant="outline"
                  color="success"
                />
              </li>
              <li class="user-event-item">
                <UButton
                  class="user-event-item-btn cursor-pointer"
                  size="xl"
                  label="Отправить запрос"
                  variant="outline"
                  color="success"
                />
              </li>
            </ul>
          </div>
          <div class="user-claim-statuses-wrapper max-w-[900px]">
            <h2 class="user-claim-status-title font-semibold mb-2">
              Статус рассмотрения:
            </h2>

            <div
              class="status-container flex flex-wrap gap-2 mb-4 max-w-[900px]"
            >
              <div
                v-for="(status, index) in statusList"
                :key="index"
                class="user-claim-status-item"
                :class="{
                  'status-active': status === currentStatus,
                  'status-completed':
                    statusOrder(status) < statusOrder(currentStatus),
                }"
              >
                <span class="status-text">{{ statusMap.get(status) }}</span>
              </div>
            </div>
          </div>
          <div class="user-claim-source mb-5">
            <h2 class="user-claim-source-title font-semibold">Pikabu отклик</h2>
            <p class="user-claim-source-name">Отклик с портала Pikabu</p>
          </div>
          <div class="user-info mb-5">
            <p class="user-birth-date">
              <span class="font-semibold">Дата рождения:</span>
              {{ candidateBirthDate }}
            </p>
            <p class="user-citizenship">
              <span class="font-semibold">Гражданство:</span> Россия
            </p>
          </div>
          <div class="user-cover-letter mb-5">
            <h2>Сопроводительное письмо:</h2>
          </div>

          <div class="user-cv-wrapper">
            <UAlert
              class="user-cv-alert bg-[#00989D]"
              :title="`Файлы портфолио: ${candidateCvFile}`"
              description="Резюме:"
              icon="fa-solid:info"
            />
          </div>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const resumeRef = ref<any[]>([]);

const candidateName = computed((): string => {
  return resumeRef.value.name;
});
const candidateEmail = computed((): string => {
  return resumeRef.value.email;
});
const candidatePhoneNumber = computed((): string => {
  return resumeRef.value.phone;
});
const candidateAge = computed((): string => {
  return !resumeRef.value.age
    ? "Возраст не указан"
    : "Возраст: " + resumeRef.value.age;
});
const candidateCvFile = computed((): string => {
  return !resumeRef.value.portfolios
    ? "отсутствуют"
    : resumeRef.value.portfolios;
});

const candidateClaimAvatar = computed((): string => {
  return !resumeRef.value?.photo
    ? "https://i.pinimg.com/474x/8b/ff/4a/8bff4a7645a1a2f322e0add49180cef8.jpg "
    : `https://dev.jobcart.ru/${resumeRef.value.photo}`;
});

// Candidate CV claim status data structure based on suggested statuses in Json

const statusMap = new Map<string, string>([
  ["new", "Новое"],
  ["viewed", "Просмотрено"],
  ["sent invitation", "Отправлено приглашение"],
  ["interview", "Назначено Собеседование"],
  ["not arrived", "Не дошёл"],
  ["passed interview", "Проведено собеседование"],
  ["awaiting response", "Ожидание ответа соискателя"],
  ["decision", "Принятие решения"],
  ["accepted", "Принят"],
  ["rejected", "Отклонено/Отказ"],
  ["archived", "Архивировано"],
]);

const candidateClaimStatus = computed((): string => {
  return statusMap.get(resumeRef.value.status) || "Статус не определен";
});

const candidateBirthDate = computed((): string => {
  return !resumeRef.value.birth_date
    ? "не указана"
    : resumeRef.value.birth_date;
});

// Candidate CV claim date
const candidateClaimDate = computed((): string => {
  const date = new Date(resumeRef.value.date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
});

// Candidate CV claim status
const statusList = Array.from(statusMap.keys());

const currentStatus = computed(() => resumeRef.value.status);

const statusOrder = (status) => {
  return statusList.indexOf(status);
};

// Fetch CV items from WP
onMounted(async () => {
  try {
    const response = await fetch(`https://dev.jobcart.ru/wp-json/test/v2/app`);
    if (!response.ok) {
      throw new Error("Failed to fetch menu data");
    }
    const data = await response.json();
    resumeRef.value = data || [];
  } catch (err) {
    console.error("Error fetching CV:", err);
  }
});
</script>

<style scoped>
:deep(.button-item-btn span) {
  width: 48px;
  height: 25px;
}
:deep(.button-item-btn) {
  border: 1px solid transparent;
  transition: 0.2s ease-out;
  padding-right: 0px;
  padding-left: 0px;
}
:deep(.button-item-btn:hover) {
  border: 1px solid #fff;
  background-color: transparent;
}
:deep(.button-item-btn:hover span) {
  color: #fff;
}

:deep(.user-cv-alert) {
  display: flex;
  align-items: center;
}
:deep(.user-cv-alert span) {
  margin-right: 15px;
  font-size: 32px;
  color: #fff;
}
:deep(.user-cv-alert span) {
  margin-right: 15px;
  font-size: 32px;
  color: #fff;
}
:deep(.user-event-item-btn) {
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  transition: 0.2s ease;
}
:deep(.user-event-item-btn:hover) {
  background-color: #086b10;
}
:deep(.user-event-item-btn:hover span) {
  color: #fff;
}
:deep(.user-event-item-btn span) {
  display: flex;
  width: 115px;
  font-size: 14px;
  justify-content: center;
  color: #6ba6e0;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
  text-align: center;
}

.user-claim-status-item {
  display: inline-flex;
  align-items: center;
  padding-right: 8px;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  background-color: #f0f0f0;
  transition: background-color 0.3s ease;
  clip-path: polygon(
    0 0,
    calc(100% - 10px) 0,
    100% 18px,
    100% calc(100% - 16px),
    calc(100% - 9px) 100%,
    100% 100%,
    0 100%
  );

  text-align: center;
  transition: all 0.3s ease;
}

.status-container div {
  text-align: center;
}

.status-active span {
  background-color: #4b5258;
  color: white;
}

.status-completed span {
  background-color: #6c757d;
  color: white;
}
.status-text {
  width: 135px;
  font-weight: normal;
  height: 100%;
  padding: 3px 5px;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
  text-align: center;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
