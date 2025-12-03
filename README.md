###RulesGit

Основные ветки
main - основная ветка, всегда стабильная, только проверенный код.

develop - ветка для разработки, в которую мы сливаем все фичи.

Ветки для задач (feature branches)
Для каждой новой задачи/фичи создаем отдельную ветку от develop с префиксом feature/:

feature/native-modal

feature/lib-virtualization

feature/theme-context

Когда задача готова, создаем Pull Request (или Merge Request) в ветку develop.

Ветки для исправлений (hotfix)
Если нашли баг в main, создаем ветку от main с префиксом hotfix/:

hotfix/fix-modal-close

После исправления сливаем в main и develop.
