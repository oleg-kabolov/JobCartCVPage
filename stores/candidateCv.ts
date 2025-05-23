import { defineStore } from "pinia";

export const useCandidateStore = defineStore("candidateCv", () => {
  const resumeRef = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const candidateName = computed(() => {
    if (loading.value) return "Загрузка...";

    return resumeRef.value?.name || "Нет данных";
  });

  const candidateEmail = computed((): string => {
    if (loading.value) return "Загрузка...";
    return resumeRef.value?.email || "Почта не указана";
  });
  const candidatePhoneNumber = computed((): string => {
    if (loading.value) return "Загрузка...";
    return resumeRef.value?.phone || "Номер не указан";
  });
  const candidateAge = computed((): string => {
    if (loading.value) return "Загрузка...";
    return !resumeRef.value?.age
      ? "Возраст не указан"
      : "Возраст: " + resumeRef.value?.age;
  });
  const candidateCvFile = computed((): string => {
    if (loading.value) return "Загрузка...";
    return !resumeRef.value?.portfolios
      ? "отсутствуют"
      : resumeRef.value?.portfolios;
  });

  const candidateClaimAvatar = computed((): string => {
    if (loading.value) return "Загрузка...";
    return !resumeRef.value?.photo
      ? "https://i.pinimg.com/474x/8b/ff/4a/8bff4a7645a1a2f322e0add49180cef8.jpg "
      : `https://dev.jobcart.ru/${resumeRef.value.photo}`;
  });

  async function fetchCandidate() {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(
        `https://dev.jobcart.ru/wp-json/test/v2/app`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch candidate data");
      }
      const data = await response.json();
      resumeRef.value = data || [];
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  return {
    resumeRef,
    loading,
    error,
    fetchCandidate,
    candidateName,
    candidateEmail,
    candidatePhoneNumber,
    candidateAge,
    candidateCvFile,
    candidateClaimAvatar,
  };
});
