<template>
  <UContainer class="page-content p-0 sm:p-0 lg:p-0 h-screen flex bg-[#18181b]">
    <UCard class="w-full h-full bg-[#18181b]">
      <template #header>
        <div class="btn-wrapper mt-[25px]">
          <ul class="button-list flex gap-2 items-center">
            <li class="button-item">
              <UTabs
                :items="BtnHeaderMap"
                class="button-item-btn cursor-pointer"
                size="xl"
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
            :src="store.candidateClaimAvatar"
            size="xl"
          />
        </div>
        <div class="card-info flex flex-col gap-1 mr-2">
          <h2
            class="user-name text-lg mb-3 font-semibold text-xl flex items-center"
          >
            {{ store.candidateName }}
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
          <p class="user-age">{{ store.candidateAge }}</p>
          <div class="user-phone-number-wrapper flex items-center">
            <div class="user-phone-number flex items-center mr-4">
              <UIcon
                name="fa-solid:phone-alt"
                class="size-5 social-icon mr-1 text-[#FFB126]"
              /><a
                :href="`tel:${store.candidatePhoneNumber}`"
                class="phone-link text-md"
                >{{ store.candidatePhoneNumber }}</a
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
            /><a :href="`mailto:${store.candidateEmail}`" class="text-md">{{
              store.candidateEmail
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
                  v-for="(label, index) in userEventBtn"
                  :key="index"
                  class="user-event-item-btn cursor-pointer mr-2"
                  size="xl"
                  :label="label.label"
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

            <div class="flex flex-wrap gap-2 mb-4 max-w-[900px] text-center">
              <UStepper
                :default-value="2"
                color="neutral"
                :items="statusListFlags"
                class="stepper"
              >
                <template #indicator="{ item }">
                  <div>{{ item.title }}</div>
                </template>
              </UStepper>
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
import { Icon } from "#components";
import { useCandidateStore } from "../stores/candidateCv";

const store = useCandidateStore();

const isLoaded = ref(false);

onMounted(async () => {
  await store.fetchCandidate();
  console.log(store.resumeRef);
  isLoaded.value = true;
});

const resumeRef = computed(() => store.resumeRef);

const BtnHeaderMap = [
  {
    key: "print",
    label: "",
    icon: "material-symbols:print-sharp",
  },
  {
    key: "pdf",
    label: "PDF",
    icon: "",
  },
  {
    key: "doc",
    label: "DOC",
    icon: "",
  },
  {
    key: "contract",
    label: "",
    icon: "clarity:contract-line",
  },
  {
    key: "trash",
    label: "",
    icon: "mdi:trash",
  },
  {
    key: "receipt",
    label: "",
    icon: "mdi:receipt-text-send",
  },
  {
    key: "favourite",
    label: "",
    icon: "mdi:favourite",
  },
];

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

const userEventBtn = [
  {
    key: "interview",
    label: "Собеседование запланировано",
  },
  {
    key: "video_call",
    label: "Создать видеозвонок",
  },
  {
    key: "schedule_event",
    label: "Запланировать событие",
  },
  {
    key: "send_request",
    label: "Отправить запрос",
  },
];

const candidateClaimStatus = computed((): string => {
  return statusMap.get(resumeRef.value?.status) || "Статус не определен";
});

const candidateBirthDate = computed((): string => {
  return !resumeRef.value?.birth_date
    ? "не указана"
    : resumeRef.value?.birth_date;
});

// Candidate CV claim date
const candidateClaimDate = computed((): string => {
  const date = new Date(resumeRef.value?.date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
});

// Candidate CV claim status
const statusList = Array.from(statusMap.keys());

const statusListFlags = computed(() => {
  const statuses = Array.from(statusMap.keys());
  const statusItems = [];
  for (const status of statuses) {
    if (status) {
      statusItems.push({
        title: statusMap.get(status),
      });
    }
  }
  return statusItems;
});

const statusOrder = (status) => {
  return statusList.indexOf(status);
};

// Fetch CV items from WP
onMounted(() => {
  store.fetchCandidate();
});
</script>

<style scoped>
.button-item-btn :deep(button > span) {
  width: 48px;
  height: 25px;
}
.button-item-btn :deep(button) {
  border: 1px solid transparent;
  transition: 0.2s ease-out;
  padding-right: 0px;
  padding-left: 0px;
}
.button-item-btn :deep(button):hover {
  cursor: pointer;
  border: 1px solid #fff;
  background-color: transparent;
}

.user-cv-alert {
  display: flex;
  align-items: center;
}
.user-cv-alert :deep(span) {
  margin-right: 15px;
  font-size: 32px;
  color: #fff;
}
.user-cv-alert :deep(span) {
  margin-right: 15px;
  font-size: 32px;
  color: #fff;
}
.user-event-item-btn {
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  transition: 0.2s ease;
}
.user-event-item-btn:hover {
  background-color: #086b10;
}
.user-event-item-btn:hover :deep(span) {
  color: #fff;
}
.user-event-item-btn :deep(span) {
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

.stepper :deep(button) {
  width: 143px;
  height: 34px;

  border-radius: 0px;
  justify-content: space-between;
  font-size: 14px;
  font-weight: normal;
  line-height: 0.9rem;
  color: #333;
  /* background-color: #f0f0f0; */
  transition: background-color 0.3s ease;
  clip-path: polygon(
    0 0,
    calc(100% - 12px) 0,
    100% 18px,
    100% calc(100% - 17px),
    calc(100% - 11px) 100%,
    100% 100%,
    0 100%
  );

  text-align: center;
  transition: all 0.3s ease;
}
.stepper :deep(div.absolute) {
  display: none;
}

.stepper :deep(h4) {
  display: none;
}
.stepper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stepper > :deep(div.flex) {
  display: inline-flex;
  gap: 2;
  flex-wrap: wrap;
  flex-direction: row;
}
.stepper > :deep(div.flex > div) {
  width: 143px;
  height: 34px;
  margin: 4px 2px;
}
</style>
