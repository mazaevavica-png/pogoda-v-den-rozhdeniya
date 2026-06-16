import type { Metadata } from 'next'
import LegalDocumentLayout, { LegalList, LegalSection } from '@/components/legal/LegalDocumentLayout'
import {
  COLLECTED_PERSONAL_DATA,
  DATA_PROCESSING_PURPOSES,
  LEGAL_CONFIG,
} from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — Погода в День Рождения',
  description:
    'Политика конфиденциальности и обработки персональных данных на сайте Погода в День Рождения.',
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <LegalDocumentLayout title="Политика конфиденциальности">
      <LegalSection title="1. Общие положения">
        <p>
          Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки
          и защиты персональных данных пользователей сайта{' '}
          <a
            href={LEGAL_CONFIG.websiteUrl}
            className="underline underline-offset-2 hover:text-gold-600"
            style={{ color: '#7A5E16' }}
          >
            {LEGAL_CONFIG.websiteUrl}
          </a>{' '}
          (далее — «Сайт»), а также условия использования сервиса «{LEGAL_CONFIG.projectName}».
        </p>
        <p>
          Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ
          «О персональных данных» и иными нормативными актами Российской Федерации в области
          защиты персональных данных.
        </p>
        <p>
          Используя Сайт и оформляя заказ, пользователь подтверждает, что ознакомился с настоящей
          Политикой и принимает её условия.
        </p>
      </LegalSection>

      <LegalSection title="2. Оператор персональных данных">
        <p>Оператором персональных данных является:</p>
        <p>
          <strong>{LEGAL_CONFIG.ownerName}</strong>
          <br />
          Статус: {LEGAL_CONFIG.ownerStatus}
          <br />
          Сайт:{' '}
          <a
            href={LEGAL_CONFIG.websiteUrl}
            className="underline underline-offset-2 hover:text-gold-600"
            style={{ color: '#7A5E16' }}
          >
            {LEGAL_CONFIG.websiteUrl}
          </a>
          <br />
          Email:{' '}
          <a
            href={`mailto:${LEGAL_CONFIG.email}`}
            className="underline underline-offset-2 hover:text-gold-600"
            style={{ color: '#7A5E16' }}
          >
            {LEGAL_CONFIG.email}
          </a>
          <br />
          Телефон:{' '}
          <a
            href={`tel:${LEGAL_CONFIG.phoneTel}`}
            className="underline underline-offset-2 hover:text-gold-600"
            style={{ color: '#7A5E16' }}
          >
            {LEGAL_CONFIG.phone}
          </a>
        </p>
      </LegalSection>

      <LegalSection title="3. Какие персональные данные мы собираем">
        <p>
          При оформлении заказа на Сайте пользователь может предоставить следующие персональные
          данные:
        </p>
        <LegalList items={COLLECTED_PERSONAL_DATA} />
        <p>
          Также автоматически могут обрабатываться технические данные: IP-адрес, тип браузера,
          сведения об устройстве, файлы cookie и аналогичные технологии — в объёме, необходимом
          для корректной работы Сайта.
        </p>
      </LegalSection>

      <LegalSection title="4. Цели обработки персональных данных">
        <p>
          Персональные данные обрабатываются исключительно в следующих целях:
        </p>
        <LegalList items={DATA_PROCESSING_PURPOSES} />
        <p>
          Оператор не использует персональные данные для рассылки рекламы без отдельного согласия
          пользователя и не передаёт их третьим лицам в маркетинговых целях.
        </p>
      </LegalSection>

      <LegalSection title="5. Правовые основания обработки">
        <p>Правовыми основаниями обработки персональных данных являются:</p>
        <LegalList
          items={[
            'согласие субъекта персональных данных на обработку его персональных данных;',
            'необходимость исполнения договора, стороной которого является субъект персональных данных;',
            'необходимость осуществления прав и законных интересов оператора при условии соблюдения прав субъекта персональных данных.',
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Передача и хранение данных">
        <p>
          Персональные данные могут передаваться только в случаях, необходимых для исполнения
          заказа: службам доставки, платёжным сервисам, а также мессенджерам и почтовым сервисам
          для связи с клиентом — в минимально необходимом объёме.
        </p>
        <p>
          Данные хранятся на территории Российской Федерации. Срок хранения — до достижения целей
          обработки либо до отзыва согласия, если иное не предусмотрено законодательством
          (в том числе для целей бухгалтерского и налогового учёта).
        </p>
      </LegalSection>

      <LegalSection title="7. Меры по защите персональных данных">
        <p>
          Оператор принимает необходимые организационные и технические меры для защиты персональных
          данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования и
          распространения, в том числе ограничивает доступ к данным и использует защищённые каналы
          связи при обмене информацией с клиентами.
        </p>
      </LegalSection>

      <LegalSection title="8. Права субъекта персональных данных">
        <p>Пользователь имеет право:</p>
        <LegalList
          items={[
            'получать информацию об обработке своих персональных данных;',
            'требовать уточнения, блокирования или уничтожения персональных данных;',
            'отозвать согласие на обработку персональных данных;',
            'обжаловать действия оператора в уполномоченный орган или в суд.',
          ]}
        />
        <p>
          Для реализации своих прав направьте запрос на email{' '}
          <a
            href={`mailto:${LEGAL_CONFIG.email}`}
            className="underline underline-offset-2 hover:text-gold-600"
            style={{ color: '#7A5E16' }}
          >
            {LEGAL_CONFIG.email}
          </a>{' '}
          или по телефону{' '}
          <a
            href={`tel:${LEGAL_CONFIG.phoneTel}`}
            className="underline underline-offset-2 hover:text-gold-600"
            style={{ color: '#7A5E16' }}
          >
            {LEGAL_CONFIG.phone}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Файлы cookie">
        <p>
          Сайт может использовать файлы cookie для обеспечения корректной работы страниц и улучшения
          пользовательского опыта. Пользователь может ограничить или отключить cookie в настройках
          браузера; при этом отдельные функции Сайта могут работать некорректно.
        </p>
      </LegalSection>

      <LegalSection title="10. Изменение Политики">
        <p>
          Оператор вправе вносить изменения в настоящую Политику. Актуальная версия всегда
          доступна на данной странице. Продолжение использования Сайта после публикации изменений
          означает согласие пользователя с обновлённой Политикой.
        </p>
      </LegalSection>

      <LegalSection title="11. Контактная информация">
        <p>
          По вопросам обработки персональных данных обращайтесь:
          <br />
          {LEGAL_CONFIG.ownerName} ({LEGAL_CONFIG.ownerStatus})
          <br />
          Email:{' '}
          <a
            href={`mailto:${LEGAL_CONFIG.email}`}
            className="underline underline-offset-2 hover:text-gold-600"
            style={{ color: '#7A5E16' }}
          >
            {LEGAL_CONFIG.email}
          </a>
          <br />
          Телефон:{' '}
          <a
            href={`tel:${LEGAL_CONFIG.phoneTel}`}
            className="underline underline-offset-2 hover:text-gold-600"
            style={{ color: '#7A5E16' }}
          >
            {LEGAL_CONFIG.phone}
          </a>
        </p>
      </LegalSection>
    </LegalDocumentLayout>
  )
}
